<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>12</el-button>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      data: [
        {
          id: '416d891907aa421c8fb12ff7ea052653',
          name: 'TMS',
          children: [
            {
              id: '167f9a33f917475486c551b894475f7a',
              name: '首页'
            },
            {
              children: [
                {
                  id: '0572c011340b4ebba4b0a959e107499c',
                  name: '运输订单管理'
                }
              ],
              id: '0b07ceae14864979b629f670d27cbdc8',
              name: '运输管理'

            },
            {
              children: [
                {
                  id: 'fda48f7a9d434e4ba8e005bc5b1238c7',
                  name: '预配载单管理'
                }
              ],
              id: 'ead4b2e672ff4faf93f9df71d5c4d9be',
              name: '配载管理'
            },
            {
              children: [
                {
                  id: 'd537e66181db4db8a56fb0161a0084f8',
                  name: '运单管理'
                }
              ],
              id: '2a85201427c04a638ae0e6abfecb0315',
              name: '运单管理'
            },
            {
              id: 'de1c857659e140059d7680110813440a',
              name: '回单管理'
            },
            {
              id: '349bd48214494915ac99899c1ed925f1',
              name: '运输异常管理'
            }
          ]
        },
        {
          children: [
            {
              id: '4756b58b26c441438d63a85f7363f2e3',
              name: '首页'
            },
            {
              children: [
                {
                  id: '9c7e7e7211e3476cbe7ff55809299846',
                  name: '订单模板'
                },
                {
                  id: 'fb584677fa6d432d9c658085003355a9',
                  name: '运输订单'
                }
              ],
              id: '891209e23dab4053bcb12764d3b25412',
              name: '订单管理'
            },
            {
              children: [
                {
                  id: '81a363db4e2449d7b4601c294fbba0e9',
                  name: '运费分摊报表'
                },
                {
                  id: 'fe45638c15f74d29a181c3a5092a6e8a',
                  name: '订单全流程报表'
                }
              ],
              id: 'ebdcc019de8141cca4d1e9f19808492d',
              name: '报表'
            }
          ],
          id: '1a03512907074d41b25253c5de7676b7',
          name: 'OMS'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

