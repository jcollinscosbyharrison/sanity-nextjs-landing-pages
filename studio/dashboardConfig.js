export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df1201dbfdbfc01cd36d843',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xmbam8sa',
                  apiId: 'd673eeca-175b-405b-a13b-da18f66209bf'
                },
                {
                  buildHookId: '5df1201d8422a001c6dfbaa1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mmpqkpsx',
                  apiId: '810eb760-6bb7-44c7-83b1-e73f3a6bbca2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jcollinscosbyharrison/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mmpqkpsx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
