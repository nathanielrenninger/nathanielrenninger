
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'

import Project from '../../../components/Project'
import PropertyManagement from './PropertyManagement'

import PropertyManagementCode from '!!raw-loader!./PropertyManagement'
import ViewerCode from '!!raw-loader!./Viewer'
import data from '!!raw-loader!./_data'

export const propertyManagement = {
  slug: 'property-management',
  title: 'Property management',
  description: 'Demonstrate how to report and visualise defects in a property.',
  published: true,
  code: [
    {
      filename: 'PropertyManagement.js',
      lang: 'jsx',
      content: PropertyManagementCode
    },
    { filename: 'Viewer.js', lang: 'jsx', content: ViewerCode },
    { filename: 'data.js', lang: 'jsx', content: data }
  ]
}

export default function () {
  return (
    <Project project={propertyManagement}>
      <PropertyManagement />
    </Project>
  )
}