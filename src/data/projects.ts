import { AssetData } from "../components/types/types";

export const projectsData: AssetData = {
  "disney": [
    {
      name: "Disney+",
      slug: "disney+",
      assets: {
        imgSrc: "/assets/img/disney/disney-thumb-2.jpg",
        videoSrc: "/assets/img/disney/disney-thumb.mp4",
      },
      description: "After hearing that Disney was releasing their own streaming network, I became very interested. Using the limited information I was able to find on the web, I decided to create a simple prototype of what this streaming service could potentially look like.",
      concept: true,
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive"
      ],
      button: {
        text: "Read More",
        color: '#0072d2'
      },
      sections: [
        {
          type: 'sideBySide',
          heading: 'Branded Intro Animation',
          description: 'As I was building out this prototype I wanted to have fun with it and also think of ways to pull the iconic Disney brand into as much of the product as possible. This began with creating a branded intro animation which incorporates the famous Mickey Mouse silhouette.',
          assets: {
            videoSrc: 'assets/img/disney/william_rajwan_disney_plus_intro.mp4',
            caption: 'Intro Animation'
          },
          button: {
            link: "https://williamrajwan.com/disney/",
            text: "View Prototype",
            color: '#0072d2'
          },
        }
      ]
    }
  ],
  "outfront": [
    {
      name: "OUTFRONT Media",
      slug: "outfront",
      assets: {
        imgSrc: "/assets/img/outfront/outfront-thumb-2.jpg",
        videoSrc: "/assets/img/outfront/outfront-thumb-2.mp4",
      },
      description: "OUTFRONT Media is one of the largest outdoor media companies. They provide a platform that connect brands to their target audiences, as they live their lives. We are famous for the unrivaled impact and creativity of our medium.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
      button: {
        text: "Ready More",
        color: '#a300f9'
      },
      sections: [
        {
          type: 'sideBySide',
          heading: 'Branding Kit',
          description: 'In addition to designing many of the OUTFRONT digital products, I have defined a thorough branding kit so that any employee within the company can build a product and ensure it is always following brand guidelines.',
          assets: {
            videoSrc: '/assets/img/outfront/william_rajwan_outfront_branding.mp4',
            caption: 'Digital Branding Kit'
          },
          button: {
            link: "https://williamrajwan.com/outfront/branding",
            text: "View Branding Kit",
            color: '#a300f9'
          },
        },
        {
          type: 'sideBySideRight',
          heading: 'Interactive Marketing Experience',
          description: "The Intertactive Marketing Experience microsite or 'IME' was created to educate consumers as well as assist employees on understanding the deployment plan of the liveboard network across the MTA.  It also created to assist client's, current or potential, to better understand the best ways to design for the digital screens and the different arrangements they are offered in.",
          assets: {
            imgSrc: '/assets/img/outfront/william_rajwan_outfront_ime_homepage_macbook.jpg',
            caption: 'IME Homepage on Macbook'
          },
          button: {
            link: "https://nyliveboards.outfrontmedia.com/",
            text: "View IME",
            color: '#a300f9'
          },
        },
        {
          type: 'sideBySide',
          heading: 'Branding Kit',
          description: 'In addition to designing many of the OUTFRONT digital products, I have defined a thorough branding kit so that any employee within the company can build a product and ensure it is always following brand guidelines.',
          assets: {
            videoSrc: '/assets/img/outfront/william_rajwan_outfront_branding.mp4',
            caption: 'Digital Branding Kit'
          },
          button: {
            link: "https://williamrajwan.com/outfront/branding",
            text: "View Branding Kit",
            color: '#a300f9'
          },
        },
      ]
    }
  ],
  "nbc": [
    {
     name: "NBCUniversal",
     slug: "nbc",
     assets: {
      imgSrc: "/assets/img/nbc/nbc-thumb.jpg",
     },
      description: "NBCUniversal is known as the largest entertainment company in the world. While working for NBCUniversal it was my responsibility to address UX/UI needs for all the brands under the NBCUniversal umbrella. This made many of the projects much more complicated as the needs of each network were very different, but it also forced us to create some amazing products.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
      button: {
        link: "https://cnbc-poc-mvp.herokuapp.com/login",
        text: "View Prototype",
        color: '#400095'
      }
    }
  ],
  "Chiller": [
    {
      name: "ChillerTV",
      slug: "chiller",
      assets: {
        imgSrc: "/assets/img/chiller/william_rajwan_chiller_thumb.jpg",
      },
      description: "Chiller is the home to original productions from some of the most acclaimed and respected creators in the horror world. Original movies include Dead Souls, from the novel by Michael Laimo; Remains, from the critically lauded graphic novel by Steve Niles; and the award-winning documentary The American Scream.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
      button: {
        link: "https://williamrajwan.com/chiller/",
        text: "View Prototype",
        color: '#be0c36'
      }
    }
  ],
  "Dr Seuss's The Lorax": [
    {
      name: "Dr Seuss's The Lorax",
      slug: "lorax",
      assets: {
        imgSrc: "/assets/img/lorax/william_rajwan_lorax_thumb2.jpg",
        videoSrc: "/assets/img/lorax/william_rajwan_lorax_thumb.mp4",
      },
      description: "This website was created as a pitch to Universal Studios. Our team was able to produce assets and build this prototype in just two weeks.",
      concept: true,
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
      button: {
        link: "https://universal-pictures.nbcuxlab.com/the-lorax/",
        text: "View Prototype",
        color: '#ff7d01'
      }
    }
  ],
  "Jurassic World": [
    {
      name: "Jurassic World",
      slug: "jurassic",
      assets: {
        imgSrc: "/assets/img/jurassic/william_rajwan_jurassic_world_thumb.jpg",
      },
      description: "After hearing that Disney was releasing their own streaming network, I became very interested. Using the limited information I was able to find on the web, I decided to create a simple prototype of what this streaming service could potentially look like.",
      concept: true,
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
      button: {
        link: "https://universal-pictures.nbcuxlab.com/jurassic-world/",
        text: "View Prototype",
        color: '#46b3e3'
      }
    }
  ],
  "Cosgrove Associates": [
    {
     name: "Cosgrove Associates",
     slug: "cosgrove",
      assets: {
        imgSrc: "/assets/img/cosgrove/william_rajwan_cosgrove_associates_thumb.jpg",
      },
      description: "Cosgrove Associates has been an innovator in financial services for 45 years and counting. From designing, branding and marketing the first ATM cards, to introducing the latest mobile payment technologies. Their partners include some of the worldâ€™s best-known brands. Together, they have helped create and build financial products, and acquire and keep customers â€“ with great results.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
    }
  ],
  "Softheon": [
    {
      name: "Softheon",
      slug: "softheon",
      assets: {
        imgSrc: "/assets/img/softheon/william_rajwan_softheon_thumb.jpg",
      },
      description: "Empowering the nation's first state health benefit exchange since 2008, Softheon's vision and strategic direction address healthcare payer, provider, and government agencies' goal of meeting Affordable Care Act (ACA) milestones.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing",
        "Print Design"
      ],
    }
  ],
  "Calle Dao": [
    {
      name: "Calle Dao",
      slug: "calle",
      assets: {
        imgSrc: "/assets/img/calle/william_rajwan_calle_dao_thumb.jpg",
      },
      description: "Calle Dao is designed to pay homage to Havanas once-thriving El Barrio Chino (Chinatown). Known as the largest such community in Latin America, El Barrio Chino occupied 44 square blocks of real estate in the late 1870s. As the Cuban and Chinese cultures mixed, a unique fusion of cuisine emerged. Today, El Barrio Chino occupies a small section of the narrow Calle Cuchillo Knife Street from which Calle Dao takes its name.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Photo Editing"
      ],
    }
  ],
  "Favela Cubana": [
    {
      name: "Favela Cubana",
      slug: "favela",
      assets: {
        imgSrc: "/assets/img/favela/william_rajwan_favela_cubana_thumb.jpg",
      },
      description: "Favela Cubana is a place where food, music and culture converge. Brazil's Frango Ipanema and Cuba's Arroz con Pollo are amongst the delicacies featured on the menu, and fresh tropical cocktails such as their tantalizing â€œOrange Basil Mojito highlight the fully stocked bar. Seamlessly fusing the food and culture of these two distinct countries, Favela Cubana continues the experience with a friendly staff and a lively, informal atmosphere.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Video Editing",
        "Photo Editing"
      ],
    }
  ],
  "Pet Costume Center": [
    {
     name: "Pet Costume Center",
     slug: "pcc",
      assets: {
        imgSrc: "/assets/img/pcc/william_rajwan_pet_costume_center_thumb.jpg",
      },
      description: "Pet Costume Center has the widest selection of pet costumes available for any occasion. They carry cat or dog costumes for Halloween, Christmas, the 4th of July, and other holidays. If it's your pet's birthday, they have a variety of costumes and accessories to help them celebrate their big day.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Photo Editing"
      ],
    }
  ],
  "Parotees Clothing": [
    {
      name: "Parotees Clothing",
      slug: "parotees",
      assets: {
        imgSrc: "/assets/img/parotees/william_rajwan_parotees_clothing_thumb.jpg",
      },
      description: "Smiling is contagious and is an international form of expression that is understood around the world. What we do is incorporate parodies and art to make you smile, whether it be through a play on a beloved cartoon hero or through a comedic alteration that creates a nostalgic feeling. Our clothing not only conveys that feeling by its design but also by the type of fabric used. This is why we print all of our designs on high quality, comfortable clothing. Our goal is to make you happy.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Package Design",
        "Photography",
        "Print Design"
      ],
    }
  ],
  "The Biggest Loser": [
    {
      name: "The Biggest Loser",
      slug: "biggestLoser",
      assets: {
        imgSrc: "/assets/img/biggest_loser/william_rajwan_the_biggest_loser_thumb.jpg",
      },
      description: "Popular reality fare about overweight people competing to drop pounds. Divided initially into teams, the contestants are aided (and bullied) by trainers and must participate in physical reward challenges. At the end of each episode, there's a weigh-in that helps determine who is sent packing.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive"
      ],
      button: {
        text: "Read More",
        color: '#015eac',
      },
    }
  ],
  "Medifast/TSFL": [
    {
      name: "Medifast/TSFL",
      slug: "medifast",
      assets: {
        imgSrc: "/assets/img/medifast/william_rajwan_medifast_thumb.jpg",
      },
      description: "Medifast, Inc. is an American nutrition and weight loss company based in Owings Mills, Maryland. The company owns five subsidiaries: Jason Pharmaceuticals, Inc. (Jason), Take Shape for Life, Inc. (TSFL), Jason Enterprises, Inc., Jason Properties, LLC and Seven Crondall, LLC. Medifast produces, distributes, and sells weight loss and other health-related products through websites, multi-level marketing, telemarketing, franchised weight loss clinics, and medical professionals.",
      tags: [
        "Graphic Design",
        "Flash"
      ],
      button: {
        text: "Read More",
        color: '#0061b6'
      },
    }
  ],
  "AHAlife": [
    {
      name: "AHAlife",
      slug: "ahalife",
      assets: {
        imgSrc: "/assets/img/ahalife/william_rajwan_ahalife_thumb.jpg",
      },
      description: "AHAlife is a curated destination for discovering 1,000+ designers & artisans in 45+ countries. They scour the globe to find exceptional, quality objects for every aspect of your life. By creating a community which values creativity, they're empowering independent designers & artisans to thrive online.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Print Design",
        "Photography"
      ],
      button: {
        text: "Read More",
        color: '#fb6d61'
      },
    }
  ],
  "Deepak Chopra": [
    {
      name: "Deepak Chopra",
      slug: "deepak",
      assets: {
        imgSrc: "/assets/img/deepak/william_rajwan_deepak_chopra_thumb.jpg",
      },
      description: "Dr. Deepak Chopra, the world's foremost authority on spirituality and alternative medicine, has recorded an exclusive guided meditation for deepak_chopra on mastering the Law of Attraction and using it to create a happier, more fulfilling life. Clip it on, press play and start living better.",
      tags: [
        "Graphic Design",
        "Package Design"
      ],
      button: {
        text: "Read More",
        color: '#d9d1cc'
      },
    }
  ],
  "appFigures": [
    {
      name: "appFigures",
      slug: "appFigures",
      assets: {
        imgSrc: "/assets/img/appfigures/william_rajwan_appfigures_thumb.jpg",
      },
      description: "appFigures is a reporting platform for mobile app developers that brings together all of your app store sales, ad data, worldwide reviews, and hourly rank updates into one intuitive and informative reporting solution.",
      tags: [
        "UX/UI Design",
        "Graphic Design",
        "Front End",
        "Responsive",
        "Print Design"
      ],
      button: {
        text: "Read More",
        color: '#f24100'
      },
    }
  ],
  "Chris Webby": [
    {
      name: "Chris Webby",
      slug: "webby",
      assets: {
        imgSrc: "/assets/img/webby/william_rajwan_chris_webby_thumb.jpg",
      },
      description: "Chris Webby, is an American rapper from Norwalk, Connecticut. Chris Webby has released many mixtapes such as the DJ Drama-hosted Bars On Me (2012) and his EP There Goes the Neighborhood (2011), which peaked at number 101 on the Billboard 200. He has worked with various artists such as Freeway, Mac Miller, Joell Ortiz, Big K.R.I.T., Method Man, Prodigy, Bun B, Tech N9ne, and Kid Ink.",
      tags: [
        "Graphic Design",
        "Front End"
      ],
      button: {
        text: "Read More",
        color: '#1b1b1b'
      },
    }
  ],
  "David Chang Photography": [
    {
      name: "David Chang Photography",
      slug: "dave",
      assets: {
        imgSrc: "/assets/img/dave/william_rajwan_david_chang_thumb.jpg",
      },
      description: "David Chang is a freelance photographer with a specialty in studio and event photography. He continues to be successful in his career and has already had great opportunities to work with large productions such as the Miss Chinese Pageant.",
      tags: [
        "Graphic Design",
        "Front End"
      ],
      button: {
        text: "Read More",
        color: '#293838'
      },
    }
  ],
  "Arrigoni Woods": [
    {
      name: "Arrigoni Woods",
      slug: "arrigoni",
      assets: {
        imgSrc: "/assets/img/arrigoni/william_rajwan_arrigoni_woods_thumb.jpg",
      },
      description: "Arrigoni Woods started with a vision, much like many a company. It was to provide a unique experience in wide plank European wood flooring. The type of wood flooring that you would expect to stumble upon in an old farmhouse while traveling throughout the European countryside. Flooring that speaks of rich heritage and tradition; flooring that helps you to put down roots of your own.",
      tags: [
        "Graphic Design",
        "Print Design"
      ],
      button: {
        text: "Read More",
        color: '#cc8729'
      },
    }
  ],
  "Pedini NY": [
    {
      name: "Pedini NY",
      slug: "pedini",
      assets: {
        imgSrc: "/assets/img/pedini/william_rajwan_pedini_thumb.jpg",
      },
      description: "For close to 60 years, Pedini has been a leader in modern European luxury design, helping families transform their kitchens into the hearts of their homes. Pedini kitchens are more than rooms - they are gathering places, social settings, environments to live and learn. And with them we strive to meet every family's dynamic needs. Using only high-quality materials and focusing on innovation for better living, we excel at providing functional, modern kitchens that enhance life at home in elegant and stylish ways.",
      tags: [
        "Graphic Design",
        "Flash"
      ],
      button: {
        text: "Read More",
        color: '#222222'
      },
    }
  ]

};
