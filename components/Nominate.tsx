import * as React from 'react'
import { Layout, Typography, Card, Space } from 'antd';

const { Title, Paragraph } = Typography;

const Nominate = () => {

  const data = [
    {
      title: 'Iraq/KRI-based',
      content: 'She must be living in Iraq/KRI. Other nationalities are welcome, but she must be living and working in Iraq/KRI',
    },
    {
      title: 'Women',
      content: 'Women are typically underrepresented in tech, whih is why we want to bring them in to the sspotlight! Sorry guys, this one`s for the idols.',
    },
    {
      title: 'Aged 18-24',
      content: 'While anyone can be a role model, we`re looking for young women who are paving the way and still making a name for themselves.',
    },
    {
      title: 'Working in tech',
      content: 'She must be actively working in the tech industry. Either for a tech company or in a tech role (developer, UX/UI, data, software, etc).',
    },
    {
      title: 'Role model',
      content: 'Generally, she inspires others around her. We think there`s a few qualities that make any role model stand out. See below!',
    },
  ]

  return (
    <Layout className='mx-auto max-w-screen-2xl px-5 lg:px-16 py-16'>
      <Title className='text-center text-4xl lg:text-5xl font-bold text-red-600 mb-8'>Who can you nominate?</Title>
      <Paragraph className='text-center mb-10'>In order to be eligible for the Women Tech Idols awards, your nomination must be:</Paragraph>
      <Layout className='grid md:grid-cols-3 xl:grid-cols-5 gap-7 text-center'>
        {
          data.map((item, index) => {
            return (
              <Card title={item.title} key={index} className="bg-red-600 rounded-xl px-8 py-5 text-yellow-200 font-bold">
                <Paragraph className='mt-4 text-left text-white font-normal'>
                  {item.content}
                </Paragraph>
              </Card>
            )
          })
        }
      </Layout>
    </Layout>
  )
}

export default Nominate
