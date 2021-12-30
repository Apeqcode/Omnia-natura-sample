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
                  buildHookId: '61cdf7d290dfde985f6a4278',
                  title: 'Sanity Studio',
                  name: 'omnia-natura-sample-studio',
                  apiId: '587eba50-63df-4656-b9d4-ef4de70b25e9'
                },
                {
                  buildHookId: '61cdf7d2c2492989f9dcae10',
                  title: 'Landing pages Website',
                  name: 'omnia-natura-sample',
                  apiId: 'bd43d533-b4b5-456a-b6b1-4b10022e3f6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Apeqcode/Omnia-natura-sample',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://omnia-natura-sample.netlify.app', category: 'apps'}
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
