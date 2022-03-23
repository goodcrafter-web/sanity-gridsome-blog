export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '623ad265824a96154c3de647',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-qe5khvbx',
                  apiId: '18404dab-8acd-4a28-b4fb-74eff95aa315'
                },
                {
                  buildHookId: '623ad266a3ddca1e7ba9b6c6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-psy9az4o',
                  apiId: '07b4aaf1-ffe3-4db6-a079-b8510bbe767a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/goodcrafter-web/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-psy9az4o.netlify.app', category: 'apps'}
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
