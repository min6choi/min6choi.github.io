(function() {
  var cd = [
    {
      title: 'UN Human Rights Knowledge Gateway',
      desc: 'UN Human Rights Knowledge Gateway is a platform for mutual learning and knowledge sharing. This is a knowledge hub accessing human rights knowledge, including promising, good and innovative practices, to support Members States in implementing international human rights norms, standards and recommendations of international human rights mechanisms. In this project, I designed the UI/UX of the landing page in compliance with UN web accessibility and OHCHR branding guidelines.',
      category: 'work',
      date: 'UN Human Rights Office · Sep 2025',
      skills: ['UI/UX Design', 'Figma'],
      url: 'un-human-rights-knowledge-gateway.html'
    },
    {
      title: 'Analysing the Role of Pauses in Literary Text using Deep learning and Emotion Analysis',
      desc: 'In my Master\'s thesis, I utilized the ELECTRA deep learning model to quantify the emotional and structural role of pauses in Samuel Beckett\'s Waiting for Godot. My research established a data-driven methodology to analyze how non-linguistic elements regulate emotional rhythm, at the intersection of computational linguistics and literary theory.',
      category: 'academic',
      date: 'Mar 2025',
      skills: ['Machine Learning', 'AI', 'Deep Learning', 'Python', 'Data Science', 'Data Visualization', 'XML'],
      url: 'deep-learning-and-emotion-analysis.html'
    },
    {
      title: 'The Tempest : A network analysis of character emotions and political dynamics',
      desc: 'As an academic project for An Introduction to Computational Social Science class, I analyzed Shakespeare\'s The Tempest using Python and XML-based text processing. By leveraging emotion lexicons, I visualized complex character relationships and quantified the play\'s shifting emotional and political dynamics.',
      category: 'academic',
      date: 'Aug 2024',
      skills: ['Data Science', 'Data Visualization', 'Python', 'Emotion Lexicon', 'XML'],
      url: 'a-network-analysis-of-character-emotions-and-political-dynamics.html'
    },
    {
      title: 'Aldo Leopold\'s Digital Edition',
      desc: 'As an academic project for Modelling and Visualizing Textual Data class, I developed a digital scholarly edition of Aldo Leopold\'s notebooks by implementing IIIF and XML. In this project, I transformed archival manuscripts into an interactive platform, offering a sophisticated way to navigate and visualize complex textual relationships.',
      category: 'academic',
      date: 'Jun 2024',
      skills: ['Web Development', 'IIIF', 'XML'],
      url: 'aldo-leopolds-digital-edition.html'
    },
    {
      title: 'How does geographical background affect education?',
      desc: 'As an academic project for Information Visualization, Data Science, and Social Media Analytics class, I investigated how geographical background influences global education by analyzing university data from New York, Seoul, and Venice (2016-2022). With Tableau, I visualized complex teaching patterns to extract quantitative insights into curriculum composition, authorship demographics, and shifting topic trends across three continents.',
      category: 'academic',
      date: 'Feb 2023',
      skills: ['Data Science', 'Data Visualization', 'Tableau'],
      url: 'geographical-background-affect-education.html'
    },
    {
      title: 'ArtRe : Public Art Re-qualification',
      desc: 'As an academic team project for Web and User Experience Design class, we developed ArtRe, a WordPress-based platform dedicated to public art re-qualification in Venice. In this team project, we showcased how public artistic interventions foster urban regeneration and social sustainability. I took part in Video recording and editing, WordPress Page Layout, UI/UX design.',
      category: 'academic',
      date: 'Jan 2023',
      skills: ['UI/UX Design', 'Figma', 'WordPress', 'Video Editing'],
      url: 'artre.html'
    },
    {
      title: 'Silent Spring',
      desc: 'Il Liutaio nel Bazaar is a digital public history project run by Ca\'foscari University, aimed at producing and publishing historical content for online audiences. In this project, I worked on an interactive web article about Rachel Carson, who contributed to the emergence of environmental multilateralism as a female scientist.',
      category: 'work',
      date: 'Il Liutaio nel Bazaar · Nov 2022',
      skills: ['Web Content', 'WordPress', 'Communication'],
      url: 'silent-spring.html'
    },
    {
      title: 'Arne Naess LOD',
      desc: 'As a personal research project, I designed and implemented a Linked Open Data (LOD) model to map environmental philosopher Arne Naess\'s life through key locations, events, and concepts. By integrating RDF and metadata schema design with E/R modelling, I structured complex biographical data into a navigable digital network.',
      category: 'independent',
      date: 'Jan 2022',
      skills: ['Linked Open Data', 'Web Development', 'RDF'],
      url: 'arne-naess-lod.html'
    },
    {
      title: 'i-o-i',
      desc: 'As an independent team project, we computationally analyzed Luciano Floridi\'s The Ethics of Information by mapping conceptual networks using TextRank and Louvain algorithms. I utilized D3.js to visualize node relationships based on frequency and community, implementing an interactive interface to explore the contextual meaning of key philosophical terms.',
      category: 'independent',
      date: 'Feb 2021',
      skills: ['Data Science', 'Data Visualization', 'D3.js', 'Web Development'],
      url: 'i-o-i.html'
    },
    {
      title: 'An E-day',
      desc: 'As a team project for the DSC Korea Solution Challenge 2021, we developed E-day to address UN Sustainable Development Goal 13 (Climate Action) through real-time data visualization. I leveraged D3.js and frontend technologies to visualize rising temperatures and greenhouse gases, providing intuitive data-driven insights to persuade the public on the urgency of climate protection.',
      category: 'independent',
      date: 'Jan 2021',
      skills: ['Data Science', 'Data Visualization', 'D3.js', 'Web Development', 'Video Editing'],
      url: 'an-e-day.html'
    }
  ];

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  var toggle = document.getElementById('searchToggle');
  var overlay = document.getElementById('searchOverlay');
  var closeBtn = document.getElementById('searchClose');
  var input = document.getElementById('searchInput');
  var res = document.getElementById('searchResults');

  function open() { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; setTimeout(function(){ input.focus(); }, 250); }
  function close() { overlay.classList.remove('open'); document.body.style.overflow = ''; input.value = ''; res.innerHTML = ''; }

  function doSearch() {
    var raw = input.value.trim(), q = raw.toLowerCase();
    res.innerHTML = '';
    if (!q) return;
    var m = cd.filter(function(d) {
      return d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || d.skills.some(function(s){ return s.toLowerCase().includes(q); });
    });
    if (!m.length) { res.innerHTML = '<div class="search-no-results">No matching results.</div>'; return; }
    m.forEach(function(mm) {
      var it = document.createElement('div');
      it.className = 'search-result-item';
      it.innerHTML = '<div class="search-result-title">' + mm.title + '</div><div class="search-result-meta">' + cap(mm.category) + ' · ' + mm.date + '</div>';
      it.addEventListener('click', function(){ close(); window.location.href = mm.url; });
      res.appendChild(it);
    });
  }

  input.addEventListener('input', doSearch);
  toggle.addEventListener('click', function(){ overlay.classList.contains('open') ? close() : open(); });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
})();
