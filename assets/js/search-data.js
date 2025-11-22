// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-codes",
          title: "Codes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Malin&#39;s academic resume; Last update 2025-04",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-rh-ct-universe",
        
          title: "Rh=ct universe",
        
        description: "a different cosmology model",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/Rhuniverse.pdf";
          
        },
      },{id: "post-classic-mechanics-on-manifolds",
        
          title: "Classic mechanics on manifolds",
        
        description: "a perspective from manifolds to interpret the independence of generalized coordinates and momenta.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/manifolds.pdf";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-detection-of-gravitational-waves-using-deep-learning",
          title: 'Detection of Gravitational Waves using Deep Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-nanohertz-gravitational-waves-a-new-probe-of-the-matter-distribution-of-milky-way-galaxy",
          title: 'Nanohertz gravitational waves—a new probe of the matter distribution of Milky way galaxy...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-hunting-optical-counterparts-of-gravitational-wave-events-with-wendelstein",
          title: 'Hunting optical counterparts of gravitational wave events with Wendelstein',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%32%32%31%38%34%30%32%33%37@%73%6D%61%69%6C.%6E%6A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/helemnmmm", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-5366-2246", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
