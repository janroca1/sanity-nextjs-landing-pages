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
                  buildHookId: '60f6ebd01487d417b2de42e1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4uft1whg',
                  apiId: 'dba1fec6-c247-4a55-a7cb-ca41854b76a8'
                },
                {
                  buildHookId: '60f6ebd16df990164cc94627',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k35oj48g',
                  apiId: '7b99fbe6-af5e-46e9-9f5d-0bc697bc1a55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/janroca1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k35oj48g.netlify.app', category: 'apps'}
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
