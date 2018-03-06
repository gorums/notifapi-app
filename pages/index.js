import React from 'react'
import Head from 'next/head'
import pkg from '../package'
import axios from 'axios'

class Index extends React.Component {

  constructor(props) {
    super(props)

    this.state = { backend: null }
  }

  componentWillMount() {
    axios.get('/api/status')
      .then(response => {
        this.setState({ backend: response.data })
      })
  }

  render() {
    return (
      <div className='Index'>
        <Head>
          <title>Welcome to {pkg.name}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <div className='box'>
          <div className='welcome'>
            Welcome to {pkg.name}
          </div>
          <div className='sub'>
            <p>This is the beginning of something awesome.</p>

            {this.state.backend &&
              <div>
                btw, the backend at <a href='/api/status'>/api/status</a> says:<br/>
                <pre>{JSON.stringify(this.state.backend, null, 2)}</pre>
              </div>
            }
          </div>
        </div>

        <div className='channel'>{process.env.ENV_CHANNEL}</div>

        {/* language=CSS */}
        <style jsx>{`
          .Index {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #e8f0f0;
            font-family: "Helvetica Neue", Arial, sans-serif;
          }

          .box {
            width: 50%;
            text-align: center;
          }

          .welcome {
            font-size: 40px;
            color: #666;
          }

          .sub {
            font-size: 20px;
            color: #999;
          }

          .sub a {
            color: #00a9ff;
            text-decoration: none;
          }

          .sub a:hover {
            color: #006fb9;
          }

          .channel {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 6px;
            border-radius: 4px;
            background-color: orangered;
            color: white;
            font-size: 14px;
          }

          pre {
            text-align: left;
            background-color: white;
            padding: 10px;
            border-radius: 8px;
            font-size: 12px;
          }
        `}</style>

      </div>
    )
  }
}

export default Index
