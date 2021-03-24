import React from 'react';

// Import static files
const platformData = await import('../data/platforms.json');

//API data
//const PLATFORMS_URL = "https://pgarchive-307718.nw.r.appspot.com/platforms";
//const SHEET_ID = process.env.REACT_APP_SHEET_ID;
//const API_KEY = process.env.REACT_APP_API_KEY;

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

  state = {
    status: 'initial',
    platforms: []
  };

  fillWithDummyData = () => {
    this.setState({
      platforms: [
        {
          name: 'Facebook',
          slug: 'facebook',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        },
        {
          name: 'YouTube',
          slug: 'youtube',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        },
        {
          name: 'Twitter',
          slug: 'twitter',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        },
        {
          name: 'Instagram',
          slug: 'instagram',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        },
        {
          name: 'SoundCloud',
          slug: 'soundcloud',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        },
        {
          name: 'Vimeo',
          slug: 'vimeo',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        },
        {
          name: 'Pornhub',
          slug: 'pornhub',
          policies: [
            { name: 'Terms of Service', slug: 'ts' },
            { name: 'Community Guidelines', slug: 'cg' },
            { name: 'Privacy Policy', slug: 'pp' },
            { name: 'Copyright Policy', slug: 'cp' }
          ]
        }
      ]
    })
  }

  getDataFromSrcFile = () => {

//    console.log('file:', platformData)

    this.setState({
        platforms: platformData,
        status: 'data loaded from file'
    })
  }

  getDataFromPublicFile = () => {
    this.setState({status: 'loadingData'})
    fetch('platforms.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
    )
      .then(response => response.json())
      .then(response => {
          this.setState({
              platforms: response,
              status: 'data loaded from server'
          })
      })
      .catch((err, response) => {
          console.log(err, '|', response);
      });

//    console.log('status in dataContext: ', this.state.status)
  }

  componentDidMount() {
    this.getDataFromSrcFile();
  }


  render() {
    return (
      <DataContext.Provider
        value={{...this.state}}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
