<template>
  <TextContent title='NOTEBOOK' :title-list='[]'>
    <v-timeline align='start'
                side='end'
                style='transform: translateX(-14px); margin-top: 30px; margin-bottom: -50px'>
      <v-timeline-item v-for='(item, index) in items' :key='index' dot-color='#2F62D7'>
        <v-card
          style='width: 1000px; border-radius: 10px 10px 0 0; box-shadow: none; transform: translateY(-15px); margin-bottom: 30px'>
          <v-card-title
            :style="{ backgroundColor: '#2F62D7', color: 'white', fontWeight: 'bold', borderRadius: '10px 10px 0 0', fontFamily: 'Futura Md BT Medium', fontSize: '24px', paddingTop: '15px', paddingLeft: '28px' }">
            {{ item.title }}
          </v-card-title>
          <v-card-text style='border: 4px #2F62D7 solid; background-color: #F6F9FF; padding: 10px 25px'>
            <p style='font-weight: bold'>Algorithm:</p>
            <ul>
              <li v-for='e in item.algorithm' style='margin-left: 2px'>{{ e }}</li>
            </ul>
            <p style='font-weight: bold'>Software:</p>
            <ul>
              <li v-for='e in item.software' style='margin-left: 2px'>{{ e }}</li>
            </ul>
            <p style='font-weight: bold'>Art Design:</p>
            <ul>
              <li v-for='e in item.design' style='margin-left: 2px'>{{ e }}</li>
            </ul>
            <p style='font-weight: bold'>Human Practices:</p>
            <ul>
              <li v-for='e in item.hp' style='margin-left: 2px'>{{ e }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </TextContent>
</template>

<script setup lang='ts'>
import TextContent from '@/components/TextContent.vue'

const items = [
  {
    title: '24 February 2024',
    algorithm: [],
    software: [],
    design: [],
    hp: [
      'Extensive literature research providing case support for the project topic.'
    ]
  },
  {
    title: '2 March 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  },
  {
    title: '24 February 2024',
    algorithm: [
      '123',
    ],
    software: [
      '123',
    ],
    design: [
      '123',
    ],
    hp: [
      '123',
    ]
  }
]
</script>

<style scoped>
@import '@/styles/style.css';
</style>
