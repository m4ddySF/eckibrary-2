import React,{Component} from 'react'
import BookList from './book_list'
import BookDetails from './book_details'


export default class BookDetails extends Component{
    render(){
        return(
            <div>
                <p>Welcome to Booklist App</p>
                <BookList/>
                <BookDetails/>
            </div>
        )
    }
}