import React, {useEffect, useState} from "react";
import './ForumPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForumPage() {


    return(

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrapper wrapper-content animated fadeInRight">



                            <div className="ibox-content forum-container">

                                <div className="forum-title">
                                    <div className="pull-right forum-desc">
                                        <samll>Total posts: 320,800</samll>
                                    </div>
                                    <h3>General subjects</h3>
                                </div>

                                <div className="forum-item active">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-shield"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">General
                                                Discussion</a>
                                            <div className="forum-sub-title">Talk about sports, entertainment, music,
                                                movies, your favorite color, talk about enything.
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                1216
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                368
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                140
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forum-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-bolt"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">Introductions</a>
                                            <div className="forum-sub-title">New to the community? Please stop by, say
                                                hi and tell us a bit about yourself.
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                890
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                120
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                154
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forum-item active">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-calendar"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">Announcements</a>
                                            <div className="forum-sub-title">This forum features announcements from the
                                                community staff. If there is a new post in this forum, please check it
                                                out.
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                680
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                124
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                61
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forum-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">Staff Discussion</a>
                                            <div className="forum-sub-title">This forum is for private, staff member
                                                only discussions, usually pertaining to the community itself.
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                1450
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                652
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                572
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="forum-title">
                                    <div className="pull-right forum-desc">
                                        <samll>Total posts: 17,800,600</samll>
                                    </div>
                                    <h3>Other subjects</h3>
                                </div>

                                <div className="forum-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-clock-o"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">Lorem Ipsum is simply
                                                dummy text. </a>
                                            <div className="forum-sub-title">Various versions have evolved over the
                                                years, sometimes by accident, sometimes on purpose passage of Lorem
                                                Ipsum (injected humour and the like).
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                1516
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                238
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                180
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forum-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-bomb"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">There are many
                                                variations of passages</a>
                                            <div className="forum-sub-title"> If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                                the middle of text. All the Lorem Ipsum generators on the .
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                1766
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                321
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                42
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forum-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-bookmark"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">The standard chunk of
                                                Lorem Ipsum</a>
                                            <div className="forum-sub-title">Ipsum generators on the Internet tend to
                                                repeat predefined chunks as necessary, making this the first true
                                                generator on the Internet.
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                765
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                90
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                11
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forum-item">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="forum-icon">
                                                <i className="fa fa-ambulance"></i>
                                            </div>
                                            <a href="forum_post.html" className="forum-item-title">Lorem Ipsum, you need
                                                to be sure there</a>
                                            <div className="forum-sub-title">Internet tend to repeat predefined chunks
                                                as necessary, making this the
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                2550
                            </span>
                                            <div>
                                                <small>Views</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                122
                            </span>
                                            <div>
                                                <small>Topics</small>
                                            </div>
                                        </div>
                                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                92
                            </span>
                                            <div>
                                                <small>Posts</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


    );
}
export default ForumPage;