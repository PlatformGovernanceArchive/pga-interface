import React from 'react';

// Import static files
//import someCsv from '../csv/Data1.csv';
//import someOtherCsv from '../csv/Data2.csv';

//API data
//const SHEET_ID = process.env.REACT_APP_SHEET_ID;
//const API_KEY = process.env.REACT_APP_API_KEY;

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

//  state = {
//    status: 'initial'
//  };

  state = {
    status: 'initial',
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
  };

//  loadBackupData = () => {
//    const csvData = {
//      data1: someCsv,
//      data2: someOtherCsv
//    }
//
//    Object.keys(csvData).forEach((key) => {
//
//      readRemoteFile(csvData[key],{
//        header: true,
//        complete: (results) => {
//          var googleData = results.data
//          console.log("Result data:", googleData)
//          this.setState({
//            [key]: googleData,
//            status: key + ' loaded'
//          });
//          console.log("Status:", this.state.status)
//        }
//      })
//    });
//  }


  componentDidMount() {
    this.setState({status: 'loadingData'})
    //    this.loadAllData();

    console.log('status in dataContext: ', this.state.status )
  }

  render() {
    return (
      <DataContext.Provider
        value={{ ...this.state }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
