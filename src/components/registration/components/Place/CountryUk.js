import React from 'react'
import CSVReader from 'react-csv-reader'

export default () => (
        <CSVReader
            fileEncoding='Windows-1251'
            onFileLoaded={(data, fileInfo) => {
                debugger
                console.dir(data, 'houses.csv')
            }}
        />
)

