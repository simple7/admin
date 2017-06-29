export default {
  'menu-zh': {
    'left-menu': [
      {
        sub: '救助现场',
        group: 'a',
        icon: 'ios-star',
        child: [
          {
            name: '现场管理',
            path: 'aSceneManage'
          }
        ]
      },
      {
        sub: '项目管理',
        group: 'b',
        icon: 'ios-folder',
        child: [
          {
            name: '自主创建',
            path: 'bOwnCreate'
          },
          {
            name: '项目类型',
            path: 'bProjectType'
          }
        ]
      },
      {
        sub: '机构管理',
        group: 'c',
        icon: 'ios-world',
        child: [
          {
            name: '机构人员管理',
            path: 'cOrgPersonManage'
          },
          {
            name: '公众号管理',
            path: 'cOfficialManage'
          },
          {
            name: '媒体机构',
            path: 'cMediaOrg'
          },
          {
            name: '公益机构',
            path: 'cWelfareOrg'
          }
        ]
      },
      {
        sub: '用户管理',
        group: 'd',
        icon: 'android-people',
        child: [
          {
            name: '消息列表',
            path: 'dMessageList'
          },
          {
            name: '用户列表',
            path: 'dUserList'
          }
        ]
      },
      {
        sub: '系统设置',
        group: 'e',
        icon: 'android-settings',
        child: [
          {
            name: '角色管理',
            path: 'eRoleManage'
          }
        ]
      }
    ],
    'user-menu': [
      {
        name: '密码修改',
        path: '/'
      },
      {
        name: '手机绑定',
        path: '/'
      },
      {
        name: '基本信息',
        path: '/'
      }
    ]
  },
  'menu-en': {
    'left-menu': [
      {
        sub: 'Scene',
        group: 'a',
        icon: 'ios-star',
        child: [
          {
            name: 'Field Manage',
            path: 'aSceneManage'
          }
        ]
      },
      {
        sub: 'Project',
        group: 'b',
        icon: 'ios-folder',
        child: [
          {
            name: 'Own Created',
            path: 'bOwnCreate'
          },
          {
            name: 'Project Type',
            path: 'bProjectType'
          }
        ]
      },
      {
        sub: 'Organizational',
        group: 'c',
        icon: 'ios-world',
        child: [
          {
            name: 'Person Manage',
            path: 'cOrgPersonManage'
          },
          {
            name: 'Official Accounts',
            path: 'cOfficialManage'
          },
          {
            name: 'Media',
            path: 'cMediaOrg'
          },
          {
            name: 'Welfare',
            path: 'cWelfareOrg'
          }
        ]
      },
      {
        sub: 'User',
        group: 'd',
        icon: 'android-people',
        child: [
          {
            name: 'Message',
            path: 'dMessageList'
          },
          {
            name: 'User List',
            path: 'dUserList'
          }
        ]
      },
      {
        sub: 'System',
        group: 'e',
        icon: 'android-settings',
        child: [
          {
            name: 'Role',
            path: 'eRoleManage'
          }
        ]
      }
    ],
    'user-menu': [
      {
        name: 'Password modification',
        path: '/'
      },
      {
        name: 'Phone binding',
        path: '/'
      },
      {
        name: 'Basic information',
        path: '/'
      }
    ]
  }
}
