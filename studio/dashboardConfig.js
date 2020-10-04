export default {
  widgets: [
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
                  buildHookId: '5f79a3d7218ca0477e456731',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-studio-eifw2ehp',
                  apiId: 'f808b61d-2314-40b8-982a-18693af32cf2'
                },
                {
                  buildHookId: '5f79a3d8218ca037e84566cd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-web-wnzas5zi',
                  apiId: 'cf9d1c9f-3a16-43bc-8e3e-ccccab8bcd84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/concod/sanity-kitchen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-web-wnzas5zi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
