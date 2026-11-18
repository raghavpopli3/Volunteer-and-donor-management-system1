// =============================================================================
// SevaSetu NGO Platform — LocalStorage Relational Data Store
// Semester 3 Mini-Project | Student: Raghav
// Core Entities: Volunteers, Donors, Contributions, Drives, & Attendance Logs
// =============================================================================

const DB_KEY = 'sevasetu_ngo_db_v1';

const SEED = {
  volunteers: [
    {
      id: 'vol-101',
      name: 'Dr. Ananya Krishnamurthy',
      email: 'ananya.krish@aiims-alumni.org',
      phone: '+91 98401 23456',
      skills: ['Medical', 'Community Health', 'Triage'],
      availability: 'Weekends',
      status: 'Active',
      joinedDate: '2024-04-12',
      city: 'Chennai',
      emergencyContact: 'Ravi Krishnamurthy (Spouse) — +91 94441 55210',
      notes: 'AIIMS-trained physician. Leads mobile health camps in Thiruvallur district. Fluent in Tamil, Telugu, English.',
      avatarColor: '#4f46e5',
      avatarUrl: 'https://images.unsplash.com/photo-1594824813580-b778d91c7820?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-102',
      name: 'Harish Venkataraman',
      email: 'harish.v@supplychainlogix.in',
      phone: '+91 91770 45678',
      skills: ['Logistics', 'Fleet Management', 'Warehouse Ops'],
      availability: 'Flexible',
      status: 'Active',
      joinedDate: '2024-01-20',
      city: 'Pune',
      emergencyContact: 'Shalini V. (Sister) — +91 98840 91234',
      notes: 'Senior logistics manager. Manages convoy scheduling for ration distribution across drought-affected talukas.',
      avatarColor: '#0891b2',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-103',
      name: 'Sameera Shaikh',
      email: 'sameera.shaikh@educationforward.org',
      phone: '+91 80045 67890',
      skills: ['Teaching', 'Counselling', 'Multilingual (Urdu/Hindi/English)'],
      availability: 'Weekdays',
      status: 'Active',
      joinedDate: '2024-07-08',
      city: 'Hyderabad',
      emergencyContact: 'Imran Shaikh (Brother) — +91 80045 11980',
      notes: 'Teaches bridge courses to out-of-school children in the Old City area. DIET-certified schoolteacher.',
      avatarColor: '#7c3aed',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-104',
      name: 'Aditya Nair',
      email: 'aditya.nair@pixelstudio.in',
      phone: '+91 97120 89012',
      skills: ['Digital Media', 'Photography', 'Fundraising Campaigns'],
      availability: 'Flexible',
      status: 'Active',
      joinedDate: '2024-09-01',
      city: 'Mumbai',
      emergencyContact: 'Priya Nair (Mother) — +91 97120 44321',
      notes: 'Professional photojournalist. Documents field impact stories for annual reports and social media outreach.',
      avatarColor: '#d97706',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-105',
      name: 'Dr. Rekha Menon',
      email: 'rekha.menon@publichealth.nic.in',
      phone: '+91 94460 34567',
      skills: ['Public Health', 'Nutrition', 'ASHA Coordination'],
      availability: 'Weekends',
      status: 'Active',
      joinedDate: '2024-10-15',
      city: 'Thiruvananthapuram',
      emergencyContact: 'Suresh Menon (Father) — +91 94460 77123',
      notes: 'PHC medical officer on deputation. Runs child nutrition screening and SAM management camps.',
      avatarColor: '#059669',
      avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-106',
      name: 'Santosh Pawar',
      email: 'santosh.pawar@constructcivil.com',
      phone: '+91 98220 56789',
      skills: ['Civil Works', 'Shelter Construction', 'Disaster Relief'],
      availability: 'Weekends',
      status: 'On-Leave',
      joinedDate: '2023-12-10',
      city: 'Nashik',
      emergencyContact: 'Kavita Pawar (Wife) — +91 98220 33456',
      notes: 'Licensed civil contractor. Key volunteer during Marathwada flood relief shelter reconstruction in 2024.',
      avatarColor: '#b45309',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-107',
      name: 'Priya Subramaniam',
      email: 'priya.sub@communityworks.in',
      phone: '+91 99400 78901',
      skills: ['Event Coordination', 'Food Distribution', 'Volunteer Management'],
      availability: 'Flexible',
      status: 'Active',
      joinedDate: '2024-02-15',
      city: 'Coimbatore',
      emergencyContact: 'Karthik S. (Brother) — +91 99400 22189',
      notes: 'Handles volunteer onboarding, daily attendance, and on-ground coordination for multi-site drives.',
      avatarColor: '#be185d',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-108',
      name: 'Mohammed Tariq',
      email: 'tariq.m@urbanrise.org',
      phone: '+91 76540 90123',
      skills: ['Youth Mentorship', 'Sports Coaching', 'Community Outreach'],
      availability: 'Weekdays',
      status: 'Active',
      joinedDate: '2024-06-05',
      city: 'Bengaluru',
      emergencyContact: 'Rubina Tariq (Mother) — +91 76540 66543',
      notes: 'Runs a football academy for at-risk youth in Shivajinagar. Collaborates with BBMP on slum outreach.',
      avatarColor: '#4338ca',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-109',
      name: 'Divya Pillai',
      email: 'divya.pillai@greenrootskerala.org',
      phone: '+91 96000 12345',
      skills: ['Environmental', 'Reforestation', 'Field Operations'],
      availability: 'Weekends',
      status: 'Active',
      joinedDate: '2024-08-20',
      city: 'Kochi',
      emergencyContact: 'Vijay Pillai (Husband) — +91 96000 88712',
      notes: 'Environmental scientist. Coordinates mangrove restoration and plastic-free backwater awareness campaigns.',
      avatarColor: '#15803d',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80'
    },
    {
      id: 'vol-110',
      name: 'Kuldeep Singh',
      email: 'kuldeep.singh@techempowers.in',
      phone: '+91 98100 23456',
      skills: ['IT Support', 'Digital Literacy', 'Data Management'],
      availability: 'Weekdays',
      status: 'Inactive',
      joinedDate: '2023-10-01',
      city: 'Delhi',
      emergencyContact: 'Harpreet Kaur (Sister) — +91 98100 55432',
      notes: 'Teaches computer literacy to senior citizens and women SHG members through e-Shakti kiosks.',
      avatarColor: '#64748b',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80'
    }
  ],

  donors: [
    {
      id: 'dnr-201',
      name: 'Tata Trusts',
      type: 'Foundation',
      tier: 'Platinum',
      email: 'grants@tatatrusts.org',
      phone: '+91 22 6665 8282',
      contactPerson: 'Siddharth Sharma (CEO Office / CSR Cell)',
      lifetimeTotal: 2500000,
      totalGifts: 4,
      lastDonationDate: '2026-02-10',
      status: 'Active',
      notes: 'Multi-year grant partner for Primary Health and Rural Education verticals. Annual renewal in March.'
    },
    {
      id: 'dnr-202',
      name: 'Shri Ramachandra Iyer Memorial Trust',
      type: 'Individual',
      tier: 'Platinum',
      email: 'trust@rcimyer.com',
      phone: '+91 44 2498 3300',
      contactPerson: 'Subramaniam Iyer (Trustee)',
      lifetimeTotal: 1500000,
      totalGifts: 5,
      lastDonationDate: '2026-01-25',
      status: 'Active',
      notes: 'Philanthropic family trust from Chennai. Focus area: girl child education and maternal health.'
    },
    {
      id: 'dnr-203',
      name: 'Infosys Foundation',
      type: 'Foundation',
      tier: 'Gold',
      email: 'csr@infosys.com',
      phone: '+91 80 2852 0261',
      contactPerson: 'K. S. Narayanan (CSR Grants Desk)',
      lifetimeTotal: 950000,
      totalGifts: 3,
      lastDonationDate: '2025-12-15',
      status: 'Active',
      notes: 'Corporate CSR matching sponsor. Funds rural library books, digital classrooms, and mobile health vans.'
    },
    {
      id: 'dnr-204',
      name: 'Dr. Meena & Vivek Oberoi',
      type: 'Individual',
      tier: 'Gold',
      email: 'giving@oberoifoundation.in',
      phone: '+91 98200 11234',
      contactPerson: 'Meena Oberoi',
      lifetimeTotal: 550000,
      totalGifts: 6,
      lastDonationDate: '2026-02-28',
      status: 'Active',
      notes: 'Recurring monthly donors since 2023. Earmarked specifically for child nutrition and safe water initiatives.'
    },
    {
      id: 'dnr-205',
      name: 'Bank of Baroda CSR Cell',
      type: 'Corporate',
      tier: 'Silver',
      email: 'csr@bankofbaroda.in',
      phone: '+91 79 2325 1201',
      contactPerson: 'Shubham Agarwal (CSR Head)',
      lifetimeTotal: 350000,
      totalGifts: 4,
      lastDonationDate: '2025-11-20',
      status: 'Active',
      notes: 'PSU bank CSR partnership. Funds anganwadi upgrade, rural sanitation, and flood preparedness kits.'
    },
    {
      id: 'dnr-206',
      name: 'The Patel Charitable Trust',
      type: 'Individual',
      tier: 'Silver',
      email: 'charitable@patelfamily.in',
      phone: '+91 98790 55678',
      contactPerson: 'Arvind Patel',
      lifetimeTotal: 285000,
      totalGifts: 5,
      lastDonationDate: '2026-03-01',
      status: 'Active',
      notes: 'Textile industry family from Ahmedabad. Active attendees at annual donor conclaves and recognition events.'
    },
    {
      id: 'dnr-207',
      name: 'Wipro Cares',
      type: 'Corporate',
      tier: 'Silver',
      email: 'wiprocares@wipro.com',
      phone: '+91 80 2844 0011',
      contactPerson: 'Sunita Mehra (Program Coordinator)',
      lifetimeTotal: 225000,
      totalGifts: 2,
      lastDonationDate: '2026-01-14',
      status: 'Active',
      notes: 'Tech CSR wing. Donates laptops, solar kits, and matches employee volunteering cash contributions.'
    },
    {
      id: 'dnr-208',
      name: 'Kamala Nehru Trust',
      type: 'Foundation',
      tier: 'Bronze',
      email: 'info@kamalatrustindia.org',
      phone: '+91 11 2373 1450',
      contactPerson: 'Smt. Kamini Devi (Secretary)',
      lifetimeTotal: 120000,
      totalGifts: 2,
      lastDonationDate: '2025-10-12',
      status: 'Active',
      notes: 'Delhi-based women empowerment trust. Funds women vocational training and micro-enterprise grants.'
    },
    {
      id: 'dnr-209',
      name: 'Shree Dharmi Mitr Mandal',
      type: 'Corporate',
      tier: 'Bronze',
      email: 'info@dharmimitr.org',
      phone: '+91 79 2646 2323',
      contactPerson: 'Bhavesh Shah (President)',
      lifetimeTotal: 84000,
      totalGifts: 6,
      lastDonationDate: '2026-02-05',
      status: 'Active',
      notes: 'Ahmedabad community association. Organises annual annadan (food donation) and provides field canteen support during drives.'
    },
    {
      id: 'dnr-210',
      name: 'Ms. Leela Raghunathan',
      type: 'Individual',
      tier: 'Bronze',
      email: 'leelar72@gmail.com',
      phone: '+91 94440 88901',
      contactPerson: 'Leela Raghunathan',
      lifetimeTotal: 52500,
      totalGifts: 7,
      lastDonationDate: '2026-02-20',
      status: 'Active',
      notes: 'Retired government teacher from Madurai. Monthly recurring donor of ₹7,500. Advocates for mid-day meal programmes.'
    }
  ],

  donations: [
    { id: 'don-501', donorId: 'dnr-201', donorName: 'Tata Trusts', amount: 1000000, date: '2026-02-10', campaign: 'Gramin Swasthya Abhiyan', paymentMethod: 'RTGS', receiptNo: 'SS-2026-081', notes: 'Phase 2 disbursement for 3 mobile medical vans — Rajasthan cluster.' },
    { id: 'don-502', donorId: 'dnr-202', donorName: 'Shri RC Iyer Memorial Trust', amount: 600000, date: '2026-01-25', campaign: 'Beti Padhao Scholarship', paymentMethod: 'NEFT', receiptNo: 'SS-2026-054', notes: '80 scholarships for Class 9-12 girl students in rural TN.' },
    { id: 'don-503', donorId: 'dnr-206', donorName: 'The Patel Charitable Trust', amount: 90000, date: '2026-03-01', campaign: 'Shiksha Kiran (Education)', paymentMethod: 'Cheque', receiptNo: 'SS-2026-099', notes: 'Textbooks and school kits for 200 tribal children — Dahod district.' },
    { id: 'don-504', donorId: 'dnr-204', donorName: 'Dr. Meena & Vivek Oberoi', amount: 45000, date: '2026-02-28', campaign: 'Gramin Swasthya Abhiyan', paymentMethod: 'NEFT', receiptNo: 'SS-2026-095', notes: 'February monthly pledge — medicines and vaccine cold-chain support.' },
    { id: 'don-505', donorId: 'dnr-210', donorName: 'Ms. Leela Raghunathan', amount: 7500, date: '2026-02-20', campaign: 'Annadaan Yojana', paymentMethod: 'UPI', receiptNo: 'SS-2026-088', notes: 'Monthly mid-day meal contribution — covers 50 children for 1 week.' },
    { id: 'don-506', donorId: 'dnr-209', donorName: 'Shree Dharmi Mitr Mandal', amount: 15000, date: '2026-02-05', campaign: 'Nadi Safai Abhiyan', paymentMethod: 'Cash', receiptNo: 'SS-2026-072', notes: 'Canteen & refreshment sponsorship for river clean-up drive.' },
    { id: 'don-507', donorId: 'dnr-207', donorName: 'Wipro Cares', amount: 135000, date: '2026-01-14', campaign: 'Shiksha Kiran (Education)', paymentMethod: 'RTGS', receiptNo: 'SS-2026-041', notes: 'Annual corporate matching donation + 30 refurbished laptops.' },
    { id: 'don-508', donorId: 'dnr-203', donorName: 'Infosys Foundation', amount: 375000, date: '2025-12-15', campaign: 'Jal Jeevan Mission Support', paymentMethod: 'RTGS', receiptNo: 'SS-2025-312', notes: 'Community borewell + solar pump installation — 8 villages, Bidar district.' },
    { id: 'don-509', donorId: 'dnr-205', donorName: 'Bank of Baroda CSR Cell', amount: 120000, date: '2025-11-20', campaign: 'Annadaan Yojana', paymentMethod: 'NEFT', receiptNo: 'SS-2025-288', notes: 'Diwali community meals and food kit distribution to 1,400 households.' },
    { id: 'don-510', donorId: 'dnr-201', donorName: 'Tata Trusts', amount: 1500000, date: '2025-08-15', campaign: 'Aapda Rahat Kosh', paymentMethod: 'RTGS', receiptNo: 'SS-2025-199', notes: 'Emergency reserve corpus — Kerala & Assam flood relief activation.' },
    { id: 'don-511', donorId: 'dnr-202', donorName: 'Shri RC Iyer Memorial Trust', amount: 450000, date: '2025-09-18', campaign: 'Shiksha Kiran (Education)', paymentMethod: 'NEFT', receiptNo: 'SS-2025-224', notes: 'Library and smart classroom expansion — 5 government schools.' },
    { id: 'don-512', donorId: 'dnr-204', donorName: 'Dr. Meena & Vivek Oberoi', amount: 45000, date: '2026-01-28', campaign: 'Gramin Swasthya Abhiyan', paymentMethod: 'NEFT', receiptNo: 'SS-2026-062', notes: 'January monthly pledge — field nurse salaries.' },
    { id: 'don-513', donorId: 'dnr-208', donorName: 'Kamala Nehru Trust', amount: 75000, date: '2025-10-12', campaign: 'Mahila Utthan Programme', paymentMethod: 'NEFT', receiptNo: 'SS-2025-251', notes: 'Women self-help group seed capital — 12 groups, 150 members.' },
    { id: 'don-514', donorId: 'dnr-206', donorName: 'The Patel Charitable Trust', amount: 60000, date: '2025-11-25', campaign: 'Annadaan Yojana', paymentMethod: 'Cheque', receiptNo: 'SS-2025-290', notes: 'Winter blanket and warm clothing distribution drive — Saurashtra.' }
  ],

  events: [
    {
      id: 'evt-301',
      title: 'Flood Relief Camp — Shivamogga District',
      date: '2026-02-12',
      location: 'Bhadravathi Taluk Community Hall, Karnataka',
      category: 'Aapda Rahat',
      targetVolunteers: 30,
      volunteerHoursLogged: 148,
      status: 'Completed',
      imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80',
      localBanner: 'assets/drive-relief.svg',
      description: 'Emergency relief distribution: 1,200 ration kits, warm clothing bundles, and tarpaulin shelters for flood-affected families in low-lying pockets of Bhadravathi.'
    },
    {
      id: 'evt-302',
      title: 'Gramin Swasthya Shivir — Villupuram',
      date: '2026-02-26',
      location: 'Govt. Higher Secondary School Grounds, Villupuram',
      category: 'Swasthya',
      targetVolunteers: 20,
      volunteerHoursLogged: 96,
      status: 'Completed',
      imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      localBanner: 'assets/drive-health.svg',
      description: 'Free health check-up camp covering BP, blood sugar, haemoglobin, dental, and vision screening for 520 adults and children from 6 adjoining villages.'
    },
    {
      id: 'evt-303',
      title: 'Nadi Safai Abhiyan — Sabarmati Riverfront',
      date: '2026-03-23',
      location: 'Riverfront East Promenade, Ahmedabad',
      category: 'Paryavaran',
      targetVolunteers: 40,
      volunteerHoursLogged: 0,
      status: 'Upcoming',
      imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
      localBanner: 'assets/drive-river.svg',
      description: 'Annual river clean-up: removal of plastic and industrial waste, saplings of native riparian species, and water quality documentation in coordination with Gujarat PCB.'
    },
    {
      id: 'evt-304',
      title: 'Annadaan Drive — Weekly Ration Packing',
      date: '2026-03-09',
      location: 'SevaSetu Warehouse, MIDC Bhosari, Pune',
      category: 'Annadaan',
      targetVolunteers: 18,
      volunteerHoursLogged: 52,
      status: 'In Progress',
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      localBanner: 'assets/drive-food.svg',
      description: 'Sorting and packing 700 monthly ration kits (rice, dal, oil, salt) for migrant families and urban poor households registered under the Shakti scheme.'
    },
    {
      id: 'evt-305',
      title: 'Shiksha Kiran — Digital Literacy Workshop',
      date: '2026-03-30',
      location: 'District Library e-Shakti Centre, Kalaburagi',
      category: 'Shiksha',
      targetVolunteers: 12,
      volunteerHoursLogged: 0,
      status: 'Upcoming',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      localBanner: 'assets/drive-education.svg',
      description: 'Hands-on coding and internet safety sessions for Class 6–8 government school students from SC/ST communities. Collaboration with PM eVIDYA programme.'
    }
  ],

  participation: [
    { id: 'pt-1',  volunteerId: 'vol-101', volunteerName: 'Dr. Ananya Krishnamurthy', eventId: 'evt-302', eventTitle: 'Gramin Swasthya Shivir — Villupuram', date: '2026-02-26', hoursLogged: 9, role: 'Lead Medical Officer', notes: 'Screened 85 patients, referred 12 for specialist follow-up. Managed cold-chain for vaccines.' },
    { id: 'pt-2',  volunteerId: 'vol-105', volunteerName: 'Dr. Rekha Menon', eventId: 'evt-302', eventTitle: 'Gramin Swasthya Shivir — Villupuram', date: '2026-02-26', hoursLogged: 8, role: 'Nutrition Screener', notes: 'Identified 28 children with acute malnutrition. Distributed RUTF packets and referred to PHC.' },
    { id: 'pt-3',  volunteerId: 'vol-107', volunteerName: 'Priya Subramaniam', eventId: 'evt-302', eventTitle: 'Gramin Swasthya Shivir — Villupuram', date: '2026-02-26', hoursLogged: 10, role: 'Camp Coordinator', notes: 'Managed 3 registration desks, volunteer rotation, and liaison with district panchayat office.' },
    { id: 'pt-4',  volunteerId: 'vol-102', volunteerName: 'Harish Venkataraman', eventId: 'evt-301', eventTitle: 'Flood Relief Camp — Shivamogga', date: '2026-02-12', hoursLogged: 11, role: 'Logistics Head', notes: 'Coordinated 2 trucks across 5 drop points. Led unloading of 1,200 ration kits under difficult road conditions.' },
    { id: 'pt-5',  volunteerId: 'vol-106', volunteerName: 'Santosh Pawar', eventId: 'evt-301', eventTitle: 'Flood Relief Camp — Shivamogga', date: '2026-02-12', hoursLogged: 9, role: 'Shelter Construction Lead', notes: 'Erected 18 tarpaulin shelter frames for homeless families in Bhadravathi riverbank area.' },
    { id: 'pt-6',  volunteerId: 'vol-104', volunteerName: 'Aditya Nair', eventId: 'evt-301', eventTitle: 'Flood Relief Camp — Shivamogga', date: '2026-02-12', hoursLogged: 7, role: 'Documentation & Media', notes: 'Shot 300+ photos and 4 video testimonials. Media kit sent to 12 press outlets for coverage.' },
    { id: 'pt-7',  volunteerId: 'vol-108', volunteerName: 'Mohammed Tariq', eventId: 'evt-301', eventTitle: 'Flood Relief Camp — Shivamogga', date: '2026-02-12', hoursLogged: 9, role: 'Distribution Lead', notes: 'Managed queue management and beneficiary ID verification for 800+ households.' },
    { id: 'pt-8',  volunteerId: 'vol-103', volunteerName: 'Sameera Shaikh', eventId: 'evt-301', eventTitle: 'Flood Relief Camp — Shivamogga', date: '2026-02-12', hoursLogged: 7, role: 'Field Translator (Kannada/Urdu)', notes: 'Assisted minority community households with intake registration and grievance communication.' },
    { id: 'pt-9',  volunteerId: 'vol-107', volunteerName: 'Priya Subramaniam', eventId: 'evt-304', eventTitle: 'Annadaan Drive — Ration Packing', date: '2026-03-09', hoursLogged: 6, role: 'Packing Supervisor', notes: 'Supervised 14 new volunteers. Packed and quality-checked 350 kits in morning shift.' },
    { id: 'pt-10', volunteerId: 'vol-102', volunteerName: 'Harish Venkataraman', eventId: 'evt-304', eventTitle: 'Annadaan Drive — Ration Packing', date: '2026-03-09', hoursLogged: 7, role: 'Warehouse In-Charge', notes: 'Loaded 22 pallets and coordinated handover to 4 delivery partners.' },
    { id: 'pt-11', volunteerId: 'vol-109', volunteerName: 'Divya Pillai', eventId: 'evt-304', eventTitle: 'Annadaan Drive — Ration Packing', date: '2026-03-09', hoursLogged: 5, role: 'Quality Inspector', notes: 'Checked expiry dates and seal integrity of all commodity packets.' },
    { id: 'pt-12', volunteerId: 'vol-101', volunteerName: 'Dr. Ananya Krishnamurthy', eventId: 'evt-301', eventTitle: 'Flood Relief Camp — Shivamogga', date: '2026-02-12', hoursLogged: 8, role: 'Emergency Medical Responder', notes: 'Treated 14 cases of water-borne illness, 3 trauma cases. Coordinated Taluk Hospital referrals.' }
  ]
};

class SevaSetu {
  constructor() {
    this.data = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.volunteers && parsed.donors) {
          // Backfill avatar and image URLs if not present in existing storage
          parsed.volunteers.forEach(v => {
            if (!v.avatarUrl) {
              const sv = SEED.volunteers.find(s => s.id === v.id);
              if (sv) v.avatarUrl = sv.avatarUrl;
            }
          });
          parsed.events.forEach(e => {
            if (!e.imageUrl) {
              const se = SEED.events.find(s => s.id === e.id);
              if (se) { e.imageUrl = se.imageUrl; e.localBanner = se.localBanner; }
            }
          });
          return parsed;
        }
      }
    } catch (e) { /* fall through to seed */ }
    const copy = JSON.parse(JSON.stringify(SEED));
    this._persist(copy);
    return copy;
  }

  _persist(d) {
    try { localStorage.setItem(DB_KEY, JSON.stringify(d || this.data)); } catch (_) {}
  }
  save()          { this._persist(this.data); }
  resetToSeed()   { this.data = JSON.parse(JSON.stringify(SEED)); this.save(); }

  /* ── Analytics ── */
  dashboardStats() {
    const totalRaised = this.data.donations.reduce((s, d) => s + d.amount, 0);
    const activeVols  = this.data.volunteers.filter(v => v.status === 'Active').length;
    const totalVols   = this.data.volunteers.length;
    const totalHours  = this.data.participation.reduce((s, p) => s + p.hoursLogged, 0);
    const totalDonors = this.data.donors.length;
    const totalEvents = this.data.events.length;

    const monthly = {};
    this.data.donations.forEach(d => {
      const k = d.date.substring(0, 7);
      monthly[k] = (monthly[k] || 0) + d.amount;
    });

    const progHours = {};
    this.data.participation.forEach(p => {
      const evt = this.data.events.find(e => e.id === p.eventId);
      const cat = evt ? evt.category : 'अन्य';
      progHours[cat] = (progHours[cat] || 0) + p.hoursLogged;
    });

    return {
      totalRaised, activeVols, totalVols, totalHours,
      totalDonors, totalEvents, monthly, progHours,
      recentDonations:    [...this.data.donations].sort((a,b) => new Date(b.date)-new Date(a.date)).slice(0, 5),
      recentParticipation:[...this.data.participation].sort((a,b) => new Date(b.date)-new Date(a.date)).slice(0, 5)
    };
  }

  /* ── Volunteers ── */
  getVolunteers(f = {}) {
    let list = [...this.data.volunteers];
    if (f.search) {
      const q = f.search.toLowerCase();
      list = list.filter(v =>
        v.name.toLowerCase().includes(q) ||
        v.email.toLowerCase().includes(q) ||
        v.city.toLowerCase().includes(q) ||
        v.skills.some(s => s.toLowerCase().includes(q))
      );
    }
    if (f.status && f.status !== 'All') list = list.filter(v => v.status === f.status);
    if (f.skill  && f.skill  !== 'All') list = list.filter(v => v.skills.some(s => s.includes(f.skill)));

    return list.map(v => {
      const hist = this.data.participation.filter(p => p.volunteerId === v.id);
      return { ...v, totalHours: hist.reduce((s,p) => s+p.hoursLogged, 0), eventsCount: new Set(hist.map(p => p.eventId)).size };
    });
  }

  getVolunteerDetails(id) {
    const v = this.data.volunteers.find(x => x.id === id);
    if (!v) return null;
    const history = this.data.participation.filter(p => p.volunteerId === id).sort((a,b) => new Date(b.date)-new Date(a.date));
    return { ...v, totalHours: history.reduce((s,p)=>s+p.hoursLogged,0), eventsCount: new Set(history.map(p=>p.eventId)).size, history };
  }

  addVolunteer(d) {
    const id = 'vol-' + Date.now().toString(36);
    const colours = ['#4f46e5','#0891b2','#7c3aed','#d97706','#059669','#be185d','#4338ca','#15803d'];
    const v = {
      id, name: d.name.trim(), email: d.email.trim(), phone: d.phone.trim(),
      skills: Array.isArray(d.skills) ? d.skills : d.skills.split(',').map(s=>s.trim()).filter(Boolean),
      availability: d.availability||'Flexible', status: d.status||'Active',
      joinedDate: d.joinedDate||new Date().toISOString().split('T')[0],
      city: d.city||'', emergencyContact: d.emergencyContact||'',
      notes: d.notes||'',
      avatarColor: colours[Math.floor(Math.random()*colours.length)]
    };
    this.data.volunteers.unshift(v); this.save(); return v;
  }

  updateVolunteer(id, updates) {
    const i = this.data.volunteers.findIndex(v=>v.id===id);
    if (i===-1) return null;
    if (typeof updates.skills==='string') updates.skills = updates.skills.split(',').map(s=>s.trim()).filter(Boolean);
    this.data.volunteers[i] = {...this.data.volunteers[i], ...updates};
    this.save(); return this.data.volunteers[i];
  }

  deleteVolunteer(id) {
    this.data.volunteers = this.data.volunteers.filter(v=>v.id!==id);
    this.data.participation = this.data.participation.filter(p=>p.volunteerId!==id);
    this.save();
  }

  /* ── Donors ── */
  getDonors(f = {}) {
    let list = [...this.data.donors];
    if (f.search) {
      const q = f.search.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.email.toLowerCase().includes(q) ||
        (d.contactPerson||'').toLowerCase().includes(q)
      );
    }
    if (f.tier && f.tier !== 'All') list = list.filter(d => d.tier===f.tier);
    if (f.type && f.type !== 'All') list = list.filter(d => d.type===f.type);

    return list.map(donor => {
      const gifts = this.data.donations.filter(x => x.donorId===donor.id);
      const total = gifts.reduce((s,g) => s+g.amount, 0);
      const last  = gifts.sort((a,b) => new Date(b.date)-new Date(a.date))[0];
      return { ...donor, lifetimeTotal: total||donor.lifetimeTotal, totalGifts: gifts.length||donor.totalGifts, lastDonationDate: last?last.date:donor.lastDonationDate };
    });
  }

  getDonorDetails(id) {
    const d = this.data.donors.find(x=>x.id===id);
    if (!d) return null;
    const donations = this.data.donations.filter(x=>x.donorId===id).sort((a,b)=>new Date(b.date)-new Date(a.date));
    return { ...d, lifetimeTotal: donations.reduce((s,x)=>s+x.amount,0)||d.lifetimeTotal, totalGifts: donations.length, donations };
  }

  addDonor(d) {
    const id = 'dnr-' + Date.now().toString(36);
    const rec = { id, name:d.name.trim(), type:d.type||'Individual', tier:d.tier||'Bronze', email:d.email.trim(), phone:d.phone.trim(), contactPerson:d.contactPerson||d.name, lifetimeTotal:0, totalGifts:0, lastDonationDate:'—', status:'Active', notes:d.notes||'' };
    this.data.donors.unshift(rec); this.save(); return rec;
  }

  updateDonor(id, updates) {
    const i = this.data.donors.findIndex(d=>d.id===id);
    if (i===-1) return null;
    this.data.donors[i] = {...this.data.donors[i], ...updates}; this.save(); return this.data.donors[i];
  }

  deleteDonor(id) { this.data.donors = this.data.donors.filter(d=>d.id!==id); this.save(); }

  /* ── Donations ── */
  getDonations(f = {}) {
    let list = [...this.data.donations];
    if (f.search) {
      const q = f.search.toLowerCase();
      list = list.filter(d => d.donorName.toLowerCase().includes(q) || d.campaign.toLowerCase().includes(q) || d.receiptNo.toLowerCase().includes(q));
    }
    if (f.campaign && f.campaign !== 'All') list = list.filter(d => d.campaign===f.campaign);
    return list.sort((a,b) => new Date(b.date)-new Date(a.date));
  }

  addDonation(d) {
    const id = 'don-' + Date.now().toString(36);
    const receipt = 'SS-' + new Date().getFullYear() + '-' + String(100 + Math.floor(Math.random()*900));
    const donor = this.data.donors.find(x=>x.id===d.donorId);
    const rec = {
      id, donorId: d.donorId||'dnr-anon',
      donorName: donor?donor.name:(d.donorName||'Anonymous'),
      amount: Number(d.amount), date: d.date||new Date().toISOString().split('T')[0],
      campaign: d.campaign||'Samanya Kosh', paymentMethod: d.paymentMethod||'NEFT',
      receiptNo: receipt, notes: d.notes||''
    };
    this.data.donations.unshift(rec);
    if (donor) {
      donor.lifetimeTotal = (donor.lifetimeTotal||0) + rec.amount;
      donor.totalGifts    = (donor.totalGifts||0) + 1;
      donor.lastDonationDate = rec.date;
      if (donor.lifetimeTotal>=1500000) donor.tier='Platinum';
      else if (donor.lifetimeTotal>=500000) donor.tier='Gold';
      else if (donor.lifetimeTotal>=100000) donor.tier='Silver';
      else donor.tier='Bronze';
    }
    this.save(); return rec;
  }

  /* ── Events ── */
  getEvents() {
    return this.data.events.map(evt => {
      const recs = this.data.participation.filter(p=>p.eventId===evt.id);
      const hrs  = recs.reduce((s,p)=>s+p.hoursLogged,0);
      return { ...evt, volunteerCount: new Set(recs.map(p=>p.volunteerId)).size, volunteerHoursLogged: hrs||evt.volunteerHoursLogged };
    });
  }

  addEvent(d) {
    const id = 'evt-' + Date.now().toString(36);
    const rec = {
      id, title:d.title.trim(), date:d.date, location:d.location.trim(),
      category:d.category||'Samaj Kalyan', targetVolunteers:Number(d.targetVolunteers)||10,
      volunteerHoursLogged:0, status:d.status||'Upcoming', description:d.description||''
    };
    this.data.events.unshift(rec); this.save(); return rec;
  }

  /* ── Participation ── */
  logParticipation(d) {
    const id  = 'pt-' + Date.now().toString(36);
    const vol = this.data.volunteers.find(v=>v.id===d.volunteerId);
    const evt = this.data.events.find(e=>e.id===d.eventId);
    const rec = {
      id, volunteerId:d.volunteerId, volunteerName:vol?vol.name:'Unknown',
      eventId:d.eventId, eventTitle:evt?evt.title:(d.eventTitle||'Community Drive'),
      date:d.date||(evt?evt.date:new Date().toISOString().split('T')[0]),
      hoursLogged:Number(d.hoursLogged), role:d.role||'Field Volunteer', notes:d.notes||''
    };
    this.data.participation.unshift(rec);
    if (evt) evt.volunteerHoursLogged = (evt.volunteerHoursLogged||0) + rec.hoursLogged;
    this.save(); return rec;
  }

  getParticipationLog() {
    return [...this.data.participation].sort((a,b) => new Date(b.date)-new Date(a.date));
  }
}

window.SS = new SevaSetu();

/* ── Indian Rupee Formatter ── */
window.inr = (n) => '₹' + Number(n).toLocaleString('en-IN');
