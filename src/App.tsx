import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserInfo from './pages/UserInfo/UserInfo';
import ExamList from './pages/ExamList/ExamList';
import ClassList from './pages/ClassList/ClassList';
import ClassManage from './pages/ClassManage/ClassManage';
import ExamManage from './pages/ExamManage/ExamManage';
import StudentList from './pages/StudentList/StudentList';
import StudentApprove from './pages/ClassManage/StudentApprove';
import CreateExam from './pages/CreateExam/CreateExam';
import LayoutComponent from './components/Layout/Layout';
import './App.css';

const menuArray = [
  {
    key: '1',
    description: '题目管理',
    role: 'student',
    isdefaultOpenKey: true,
    icon: 'FileDoneOutlined',
    children: [
      {
        key: '1_1',
        parentKey: '1',
        title: '题库列表',
        isdefaultSelectedKey: true,
        path: '/home/question-bank'
      },
      {
        key: '1_2',
        parentKey: '1',
        title: '错题管理',
        isdefaultSelectedKey: false,
        path: '/home/error-manager'
      }
    ]
  },
  {
    key: '2',
    description: '考试管理',
    role: 'student',
    isdefaultOpenKey: false,
    icon: 'DesktopOutlined',
    children: [
      {
        key: '2_1',
        parentKey: '2',
        title: '考试列表',
        isdefaultSelectedKey: false,
        path: '/home/student/class-list'
      },
      // {
      //   key: '2_2',
      //   parentKey: '2',
      //   title: '已经结束',
      //   isdefaultSelectedKey: false,
      //   path: '/home/exam-attended'
      // },
      // {
      //   key: '2_3',
      //   parentKey: '2',
      //   title: '正在进行',
      //   isdefaultSelectedKey: false,
      //   path: '/home/examing'
      // },
      // {
      //   key: '2_4',
      //   parentKey: '2',
      //   title: '即将开始',
      //   isdefaultSelectedKey: false,
      //   path: '/home/exam-will'
      // }
    ]
  },
  {
    key: '3',
    description: '班级管理',
    role: 'teacher',
    isdefaultOpenKey: false,
    icon: 'DesktopOutlined',
    children: [
      {
        key: '3_1',
        parentKey: '3',
        title: '班级列表',
        isdefaultSelectedKey: false,
        path: '/home/teacher/class-manage'
      },
      {
        key: '3_2',
        parentKey: '3',
        title: '学生审批',
        isdefaultSelectedKey: false,
        path: '/home/teacher/approve'
      }
    ]
  },
  {
    key: '4',
    description: '考试管理',
    role: 'teacher',
    isdefaultOpenKey: false,
    icon: 'DesktopOutlined',
    children: [
      {
        key: '4_1',
        parentKey: '4',
        title: '考试列表',
        isdefaultSelectedKey: false,
        path: '/home/teacher/exam-manage'
      },
      {
        key: '4_2',
        parentKey: '4',
        title: '添加题目',
        isdefaultSelectedKey: false,
        path: '/home/teacher/create-topic'
      },
      {
        key: '4_3',
        parentKey: '4',
        title: '题目管理',
        isdefaultSelectedKey: false,
        path: '/home/teacher/topic-list'
      },
      // {
      //   key: '4_4',
      //   parentKey: '4',
      //   title: '组卷',
      //   isdefaultSelectedKey: false,
      //   path: '/home/teacher/create-exam'
      // }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Redirect exact from='/' to='/login' />
            <Route exact path='/registry' component={Register} />
            <Route path='/home' render={() => (
              <LayoutComponent menuArray={menuArray}>
                <Switch>
                  {/* <Route exact to='/home/user-info' /> */}
                  <Route exact path='/home/user-info' component={UserInfo} />
                  <Route exact path='/home/exam-list' component={ExamList} />
                  <Route exact path='/home/student/class-list' component={ClassList} />
                  <Route exact path='/home/teacher/class-manage' component={ClassManage} />
                  <Route exact path='/home/teacher/exam-manage' component={ExamManage} />
                  <Route exact path='/home/teacher/student-list/:id' component={StudentList} />
                  <Route exact path='/home/teacher/approve' component={StudentApprove} />
                  <Route exact path='/home/teacher/create-exam/:id' component={CreateExam} />
                </Switch>
              </LayoutComponent>
            )} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
