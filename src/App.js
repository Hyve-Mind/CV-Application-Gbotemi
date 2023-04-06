import './components/styles/App.css'
import React, { Component } from 'react'
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import Experience from './components/Experience';
import Education from './components/Education';
import PrintOut from './components/PrintOut'
import References from './components/References';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progressValues : {
        education : 0,
        experience : 0,
        reference : 0,
        details : 0
      },
      progressValue : 0,
      finalLanguage: 'en',
      initialLanguage: 'en',
      flag : 'GB'
    }
    this.handleChange = this.handleChange.bind(this);
    this.eduProgress = this.eduProgress.bind(this);
    this.expProgress = this.expProgress.bind(this);
    this.refProgress = this.refProgress.bind(this);
    this.detailsProgress = this.detailsProgress.bind(this);
  }
  handleFlags() {
    if (this.state.finalLanguage === 'en') {
      this.setState({
        flag: this.state.flag = 'GB'
      })
    }
    else if (this.state.finalLanguage === 'ar') {
      this.setState({
        flag: this.state.flag = 'AE'
      })
    }
    else if (this.state.finalLanguage === 'zh') {
      this.setState({
        flag: this.state.flag = 'CN'
      })
    }
    else if (this.state.finalLanguage === 'ha' || this.state.finalLanguage === 'ig'|| this.state.finalLanguage === 'yo' ) {
      this.setState({
        flag: this.state.flag = 'NG'
      })
    }
    else if (this.state.finalLanguage === 'hi') {
      this.setState({
        flag: this.state.flag = 'IN'
      })
    }
    else if (this.state.finalLanguage === 'it') {
      this.setState({
        flag: this.state.flag = 'IT'
      })
    }
    else if (this.state.finalLanguage === 'ja') {
      this.setState({
        flag: this.state.flag = 'JP'
      })
    }
    else if (this.state.finalLanguage === 'pt') {
      this.setState({
        flag: this.state.flag = 'PT'
      })
    }
    else if (this.state.finalLanguage === 'ru') {
      this.setState({
        flag: this.state.flag = 'RU'
      })
    }
    else if (this.state.finalLanguage === 'es') {
      this.setState({
        flag: this.state.flag = 'ES'
      })
    }
  }
  handleChange(e) {
    const finalLanguage2 = this.state.finalLanguage
    this.setState({
      initialLanguage: this.state.initialLanguage = finalLanguage2,
      finalLanguage: this.state.finalLanguage = e.target.value
    })
    this.handleFlags();
  }
  totalProgress(){
    const values = Object.values(this.state.progressValues)
    const sum = values.reduce((total,value) =>{
      return total + value
    },0)
    this.setState({
      progressValue : this.state.progressValue = sum
    })
  }
  eduProgress(value){
    this.setState({
      progressValue : this.state.progressValues.education = value,
    })
    this.totalProgress();
  }
  expProgress(value){
    this.setState({
      progressValue: this.state.progressValues.experience = value,
    })
    this.totalProgress();
  }
  refProgress(value) {
    this.setState({
      progressValue: this.state.progressValues.reference = value,
    })
    this.totalProgress();
  }
  detailsProgress(value) {
    this.setState({
      progressValue: this.state.progressValues.details = value,
    })
    this.totalProgress();
  }
  render() {
    return (
      <div className='app'>
        <div>
          <Header value = {this.state.progressValue}/>
          <UserDetails initialLanguage = {this.state.initialLanguage} finalLanguage={this.state.finalLanguage} handleChange={this.handleChange} formProgress = {this.detailsProgress} flag = {this.state.flag} />
          <Experience initialLanguage={this.state.initialLanguage} finalLanguage={this.state.finalLanguage} formProgress={this.expProgress} />
          <Education initialLanguage={this.state.initialLanguage} finalLanguage={this.state.finalLanguage} formProgress = {this.eduProgress} />
          <References initialLanguage={this.state.initialLanguage} finalLanguage={this.state.finalLanguage} formProgress = {this.refProgress}/>
        </div>
        <div className='result'>
          <PrintOut />
        </div>
      </div>
    )
  }
}
export default App;
