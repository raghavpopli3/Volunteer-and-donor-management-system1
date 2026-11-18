

PORT=${1:-8080}
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "======================================================================"
echo " Starting SevaSetu Web Application Server"
echo " Serving directory: $DIR"
echo " URL: http://localhost:$PORT"
echo " Press Ctrl+C to stop the server"
echo "======================================================================"

# Try opening default browser in background if on macOS
if which open >/dev/null 2>&1; then
  (sleep 1 && open "http://localhost:$PORT") &
fi

perl -MIO::Socket::INET -e '
  my $port = shift || 8080;
  my $dir = shift || ".";
  my $server = IO::Socket::INET->new(
    LocalPort => $port,
    Type      => SOCK_STREAM,
    Reuse     => 1,
    Listen    => 10
  ) or die "Could not start server on port $port: $@\n";

  print "SevaSetu Server listening on http://localhost:$port\n";

  my %mime = (
    "html" => "text/html; charset=UTF-8",
    "css"  => "text/css",
    "js"   => "application/javascript",
    "json" => "application/json",
    "csv"  => "text/csv",
    "svg"  => "image/svg+xml",
    "png"  => "image/png",
    "jpg"  => "image/jpeg",
    "jpeg" => "image/jpeg",
    "webp" => "image/webp",
    "gif"  => "image/gif",
    "ico"  => "image/x-icon"
  );

  while (my $client = $server->accept()) {
    my $req = <$client>;
    next unless $req;
    my ($method, $path) = split /\s+/, $req;
    $path =~ s/\?.*$//;
    $path = "/index.html" if $path eq "" || $path eq "/";
    $path =~ s/^\///;

    my $file = "$dir/$path";
    if (-f $file) {
      my ($ext) = $file =~ /\.([^.]+)$/;
      my $type = $mime{lc($ext)} || "application/octet-stream";
      open my $fh, "<:raw", $file or next;
      local $/;
      my $content = <$fh>;
      close $fh;

      my $len = length($content);
      print $client "HTTP/1.1 200 OK\r\n";
      print $client "Content-Type: $type\r\n";
      print $client "Content-Length: $len\r\n";
      print $client "Connection: close\r\n\r\n";
      print $client $content;
    } else {
      my $msg = "404 Not Found: $path";
      print $client "HTTP/1.1 404 Not Found\r\n";
      print $client "Content-Type: text/plain\r\n";
      print $client "Content-Length: " . length($msg) . "\r\n";
      print $client "Connection: close\r\n\r\n";
      print $client $msg;
    }
    close $client;
  }
' "$PORT" "$DIR"
