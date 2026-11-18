// SevaSetu NGO Platform — CSV Data Export Utility
// Semester 3 Mini-Project | Raghav

const Exporter = {
  cell(v) {
    if (v === null || v === undefined) return '""';
    let s = String(v);
    return (s.includes('"') || s.includes(',') || s.includes('\n'))
      ? '"' + s.replace(/"/g, '""') + '"'
      : '"' + s + '"';
  },

  build(headers, cols, rows) {
    const hRow = headers.map(h => this.cell(h)).join(',');
    const dRows = rows.map(r => cols.map(c => this.cell(typeof c === 'function' ? c(r) : r[c])).join(','));
    return [hRow, ...dRows].join('\r\n');
  },

  download(filename, content, type = 'text/csv;charset=utf-8;') {
    const blob = new Blob(['\uFEFF' + content], { type }); // BOM for Excel compatibility
    const url  = URL.createObjectURL(blob);
    const a    = Object.assign(document.createElement('a'), { href: url, download: filename, style: 'display:none' });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  today() { return new Date().toISOString().split('T')[0]; },

  exportVolunteers() {
    const data = window.SS.getVolunteers();
    const csv  = this.build(
      ['Volunteer ID','Naam (Name)','Email','Mobile','Sheher (City)','Kaushal (Skills)','Uplabdhata (Availability)','Sthiti (Status)','Yogdan Ghante (Total Hours)','Abhiyan Sankhya (Drives)','Joining Date','Emergency Contact','Notes'],
      ['id','name','email','phone','city', v=>Array.isArray(v.skills)?v.skills.join('; '):v.skills,'availability','status','totalHours','eventsCount','joinedDate','emergencyContact','notes'],
      data
    );
    this.download(`sevasetu_volunteers_${this.today()}.csv`, csv);
    return data.length;
  },

  exportDonors() {
    const data = window.SS.getDonors();
    const csv  = this.build(
      ['Donor ID','Naam (Name)','Prakar (Type)','Star (Tier)','Email','Mobile','Liaison','Kul Rashi (Lifetime ₹)','Daan Sankhya (Gifts)','Antim Daan (Last Gift Date)','Notes'],
      ['id','name','type','tier','email','phone','contactPerson', d=>d.lifetimeTotal,'totalGifts','lastDonationDate','notes'],
      data
    );
    this.download(`sevasetu_donors_${this.today()}.csv`, csv);
    return data.length;
  },

  exportDonations() {
    const data = window.SS.getDonations();
    const csv  = this.build(
      ['Receipt No','Donor ID','Daankarta (Donor Name)','Rashi (Amount ₹)','Tarikh (Date)','Abhiyan (Campaign)','Bhugtan Vidhi (Payment Method)','Notes'],
      ['receiptNo','donorId','donorName','amount','date','campaign','paymentMethod','notes'],
      data
    );
    this.download(`sevasetu_donations_${this.today()}.csv`, csv);
    return data.length;
  },

  exportParticipation() {
    const data = window.SS.getParticipationLog();
    const csv  = this.build(
      ['Log ID','Volunteer ID','Sevak Naam (Volunteer)','Event ID','Abhiyan Naam (Event)','Tarikh (Date)','Yogdan Ghante (Hours)','Bhumika (Role)','Notes'],
      ['id','volunteerId','volunteerName','eventId','eventTitle','date','hoursLogged','role','notes'],
      data
    );
    this.download(`sevasetu_seva_log_${this.today()}.csv`, csv);
    return data.length;
  },

  exportJSONBackup() {
    const json = JSON.stringify(window.SS.data, null, 2);
    this.download(`sevasetu_backup_${this.today()}.json`, json, 'application/json');
  }
};

window.Exporter = Exporter;
