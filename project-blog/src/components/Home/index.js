import React, { Component } from 'react';
import firebase from '../../firebase';
import './home.css';

class Home extends Component{

    state = {
        posts: []
    };

    componentDidMount(){
        firebase.app.ref('posts').once('value', (snapshot) =>{
            let state = this.state;
            state.post = [];
            snapshot.forEach((childItem)=> {
                state.posts.push({
                    key: childItem.key,
                    titulo: childItem.val().titulo,
                    imagem: childItem.val().imagem,
                    descrição: childItem.val().descrição,
                    autor: childItem.val().autor
                })
            });
            this.state(state);
        })
    }

    render(){
        return(
            <section id="post">
                {this.state.posts.map((post)=> {
                    <article key={post.key}>
                        <header>
                            <div className="title">
                                <strong> {post.titulo} </strong>
                                <span> autor {post.autor}</span>
                            </div>
                        </header>
                        <img src={post.image} alt="Capa do post" />

                        <footer>
                            <p>{post.descrição}</p>
                        </footer>
                    </article>
                })}

            </section>
        );
    }
}

export default Home;