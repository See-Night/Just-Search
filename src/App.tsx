import React from 'react'
import './App.css'

type PropsType = {}
type StateType = {
  search_info: string
}

interface App {
  props: PropsType,
  state: StateType
}

class App extends React.Component {
  constructor(props: PropsType) {
    super(props)

    this.state = {
      search_info: ""
    }

    this.inputOnEnter = this.inputOnEnter.bind(this)
    this.inputOnChange = this.inputOnChange.bind(this)
  }

  inputOnEnter(event: React.KeyboardEvent) {
    if (event.code !== "Enter" && event.code !== "NumpadEnter") return
    // let search_info: string | undefined = document.getElementById("search")
    console.log(this.state.search_info)
    if (this.state.search_info) {
      window.location.href = "https://bing.com/search?q=" + this.state.search_info
    }
  }

  inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      search_info: e.target.value
    })
  }

  render(): React.ReactNode {
      return (
        <div className="w-screen h-full bg-gray-200 dark:bg-[#3c3c3c] flex flex-col justify-start items-center py-24 px-4">
          {/* logo */}
          <div id='logo-bar' className='w-full flex flex-row justify-center items-center'>
            <svg id="Just-Search" data-name="Just-Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='w-20 h-20 fill'>
              <path className="fill-gray-600 dark:fill-gray-300" d="M118.73,38.48c-43.63,0-79,35.37-79,79s35.37,79,79,79,79-35.37,79-79S162.36,38.48,118.73,38.48Zm0,137c-32.03,0-58-25.97-58-58s25.97-58,58-58,58,25.97,58,58-25.97,58-58,58Z" />
              <rect className="fill-gray-600 dark:fill-gray-300" x="148.73" y="175.48" width="75" height="24" rx="12" ry="12" transform="translate(187.12 -76.77) rotate(45)" />
            </svg>
            <h1 className='ml-8 text-[2rem] md:text-[3rem] font-medium text-gray-600 dark:text-gray-300 cursor-default max' style={{userSelect: 'none'}}>Just Search</h1>
          </div>

          {/* search */}
          <div className='px-6 py-3 bg-white hover:bg-gray-50 focus-within:bg-gray-50 dark:hover:bg-[#4a4a4a] dark:focus-within:bg-[#4a4a4a] dark:bg-[#282828] w-full max-w-[48rem] rounded-lg shadow-lg mt-16'>
            <label htmlFor="search"></label>
            <input id='search' name='search' type="text" value={this.state.search_info} className='text-[12pt] outline-none w-full bg-transparent text-gray-600 dark:text-white' placeholder='Search' autoComplete='off' onKeyDown={this.inputOnEnter} onChange={this.inputOnChange} />
          </div>


        </div>
      )
  }
}

export default App
