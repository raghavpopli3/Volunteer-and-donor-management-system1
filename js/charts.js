// SevaSetu Charts Engine — Custom HTML5 Canvas Visualizations
// Semester 3 Project | Raghav

const Charts = {

  /* ── Monthly Donations Bar Chart ── */
  renderBar(canvasId, monthly) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const W = rect.width || 480;
    const H = rect.height || 220;

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    const isDark   = document.documentElement.getAttribute('data-theme') === 'dark';
    const textCol  = isDark ? '#94a3b8' : '#64748b';
    const gridCol  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
    const barCol   = isDark ? '#2563eb' : '#3b82f6';
    const barHi    = isDark ? '#60a5fa' : '#1d4ed8';

    const months = ['2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03'];
    const labels = ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
    const values = months.map(m => monthly[m] || 0);
    const maxVal = Math.max(...values, 10000) * 1.18;

    const pL = 52, pR = 14, pT = 22, pB = 26;
    const cW  = W - pL - pR, cH = H - pT - pB;
    const step = cW / months.length;
    const barW = Math.min(26, step * 0.48);

    // Grid lines
    ctx.font = `500 10px Inter, sans-serif`;
    for (let i = 0; i <= 4; i++) {
      const y   = pT + (cH / 4) * i;
      const val = Math.round(maxVal - (maxVal / 4) * i);
      ctx.strokeStyle = gridCol; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(pL, y); ctx.lineTo(W - pR, y); ctx.stroke();
      ctx.fillStyle = textCol; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      const label = val >= 100000 ? '₹' + (val/100000).toFixed(1) + 'L' : val >= 1000 ? '₹' + (val/1000).toFixed(0) + 'K' : '₹' + val;
      ctx.fillText(label, pL - 6, y);
    }

    // Bars
    months.forEach((m, i) => {
      const val = values[i];
      const bH  = (val / maxVal) * cH;
      const x   = pL + i * step + (step - barW) / 2;
      const y   = pT + cH - bH;
      const col = (i === months.length - 2) ? barHi : barCol;

      ctx.fillStyle = col;
      const r = 2;
      ctx.beginPath();
      if (bH > r) {
        ctx.moveTo(x + r, y); ctx.lineTo(x + barW - r, y);
        ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
        ctx.lineTo(x + barW, pT + cH); ctx.lineTo(x, pT + cH); ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
      } else if (bH > 0) { ctx.rect(x, y, barW, bH); }
      ctx.closePath(); ctx.fill();

      // Value label on bar
      if (val > 0) {
        const vLabel = val >= 100000 ? (val/100000).toFixed(1)+'L' : val >= 1000 ? (val/1000).toFixed(0)+'K' : String(val);
        ctx.fillStyle = isDark ? '#93c5fd' : '#1e40af';
        ctx.font = `600 9px Inter, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
        ctx.fillText('₹' + vLabel, x + barW / 2, y - 4);
      }

      // Month label below bar
      ctx.fillStyle = textCol;
      ctx.font = `500 10px Inter, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(labels[i], x + barW / 2, H - pB + 6);
    });
  },

  /* ── Programme Hours Donut ── */
  renderDonut(canvasId, progHours) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const W = rect.width || 360;
    const H = rect.height || 220;

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const palette = {
      'Aapda Rahat': '#1d4ed8', 'Swasthya': '#0284c7', 'Annadaan': '#d97706',
      'Paryavaran': '#059669', 'Shiksha': '#4338ca', 'अन्य': '#64748b'
    };

    const total  = Object.values(progHours).reduce((a, b) => a + b, 0);
    const cX     = Math.round(W * 0.35);
    const cY     = Math.round(H * 0.5);
    const outerR = Math.min(W * 0.28, H * 0.38);
    const innerR = Math.round(outerR * 0.65);

    let angle = -Math.PI / 2;
    const entries = Object.entries(progHours).sort((a, b) => b[1] - a[1]);

    // Draw donut slices
    entries.forEach(([cat, hrs]) => {
      const sweep = (hrs / (total || 1)) * 2 * Math.PI;
      ctx.fillStyle = palette[cat] || '#64748b';
      ctx.beginPath();
      ctx.arc(cX, cY, outerR, angle, angle + sweep);
      ctx.arc(cX, cY, innerR, angle + sweep, angle, true);
      ctx.closePath();
      ctx.fill();

      // Clean separator border between slices
      ctx.strokeStyle = isDark ? '#0f1422' : '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      angle += sweep;
    });

    // Clean, proper center label: 96 / HOURS (fixed the duplicate "96h HOURS" error)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
    ctx.font = `700 24px Inter, sans-serif`;
    ctx.fillText(total, cX, cY - 7);

    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.font = `600 10px Inter, sans-serif`;
    ctx.letterSpacing = '0.05em';
    ctx.fillText('HOURS', cX, cY + 12);

    // Legend
    const lX = Math.max(Math.round(W * 0.60), cX + outerR + 24);
    const lY0 = Math.max(16, Math.round((H - entries.length * 36) / 2));

    entries.slice(0, 5).forEach(([cat, hrs], i) => {
      const iy = lY0 + i * 36;
      ctx.fillStyle = palette[cat] || '#64748b';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(lX, iy, 9, 9, 2);
      } else {
        ctx.rect(lX, iy, 9, 9);
      }
      ctx.fill();

      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillStyle = isDark ? '#f1f5f9' : '#0f172a';
      ctx.font = `600 12px Inter, sans-serif`;
      ctx.fillText(cat, lX + 16, iy - 2);

      ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
      ctx.font = `500 11px Inter, sans-serif`;
      const pct = Math.round((hrs / (total || 1)) * 100);
      ctx.fillText(`${hrs} hrs (${pct}%)`, lX + 16, iy + 14);
    });
  }
};

window.Charts = Charts;
