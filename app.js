function Field ({name, value, onChange, children}) {
  return <div className="form-group">
    <label htmlFor={name}>{children}</label>
    <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
  </div>
}

function Checkbox ({name, value, onChange, children}) {
  return <div className="form-checkbox">
    <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
    <label htmlFor={name} className="form-check-label">{children}</label>
  </div>
} 
class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = JSON.stringify(this.state)
    console.log(data)
    this.setState({
      nom: '',
      prenom: '',
      newsletter: false
    })
  }

  render () {
    return  <form className="container" onSubmit={this.handleSubmit}> 
              <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
              <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
              <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
              <div className="form-group">
                <button className="btn btn-primary">Envoyer</button>
              </div>
            </form>
  }
}

// /// CODE JUSQU'À LA PARTIE 5 ///

// // function WelcomeFunc ({name}) {
// //   return <div>
// //     <h1>Bonjour {name}</h1>
// //     <p>{children}</p>
// //   </div>
// // }

// // class Welcome extends React.Component {

// //   render(){
// //     return <div>
// //     <h1>Bonjour {this.props.name}</h1>
// //     <p>{this.props.children}</p>
// //   </div>
// //   }
// // }

// // class Clock extends React.Component {

// //   constructor (props) {
// //     super(props)
// //     this.state = {date: new Date()}
// //   }

// //   componentDidMount () {
// //     this.timer = window.setInterval(this.tick.bind(this), 1000)
// //   }

// //   componentwillUnmount () {
// //     window.clearInterval(this.timer)
// //   }

// //   tick () {
// //     this.setState({date: new Date()})
// //   }

// //   render () {
// //     return <div>
// //       Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
// //     </div>
// //   }
// // }

// // class Incrementer extends React.Component {

// //   constructor (props) {
// //     super(props)
// //     this.state = {n: props.start, timer: null}
// //     this.toggle = this.toggle.bind(this)
// //     this.reset = this.reset.bind(this)
// //   }

// //   componentDidMount () {
// //     this.play()
// //   }

// //   componentwillUnmount () {
// //     window.clearInterval(this.state.timer)
// //   }

// //   increment () {
// //     this.setState(function (state, props) {
// //       return {n: state.n + props.step}
// //     })
// //   }

// //   pause () {
// //     window.clearInterval(this.state.timer)
// //     this.setState({
// //       timer: null
// //     })
// //   }

// //   toggle () {
// //     return this.state.timer ? this.pause() : this.play()
// //   }

// //   label () {
// //     return this.state.timer ? 'Pause' : 'Lecture'
// //   } 

// //   play () {
// //     this.setState({
// //       timer: window.setInterval(this.increment.bind(this), 1000)
// //     })
// //   }

// //   reset () {
// //     this.pause()
// //     this.play()
// //     this.setState((state, props) => ({n: props.start}))
// //   }

// //   render () {
// //     return  <div>
// //               Valeur : {this.state.n}
// //               <button onClick={this.toggle}>{this.label()}</button>
// //               <button onClick={this.reset}>Réinitialiser</button>
// //             </div>
// //   }
// // }

// // Incrementer.defaultProps = {
// //   start: 0,
// //   step: 1
// // }

// // class ManualIncrementer extends React.Component {

// //   constructor (props) {
// //     super(props)
// //     this.state = {n: 0}
// //   }



// //   increment (e) {
// //     e.preventDefault()
// //     this.setState((state, props) => ({n: state.n + 1}))
// //   }

// //   render () {
// //     return <div>Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button></div>
// //   }
// // }

// // function Home(){
// //   return <div>
// //     <Welcome name="Dorothée" />
// //     <Welcome name="Jean" />
// //     <ManualIncrementer />
// //     <Clock/>
// //     <Incrementer />
// //     <Incrementer start={0}/>
// //     <Incrementer start={15} step={10}/>
// //   </div>
// // }
// /// CODE JUSQU'À LA PARTIE 5 ///

ReactDOM.render(<Home />, document.querySelector('#app'))