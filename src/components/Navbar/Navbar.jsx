import React, { Component } from 'react';
import './Navbar.css';


export const Navbar = () => {
      return (
        <div className="navbar navbar-default yamm" role="navigation" id="navbar">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand home" href="index.html" data-animate-hover="bounce">
                    <img src="img/logo.png" alt="Obaju logo" className="hidden-xs" />
                    <img src="img/logo-small.png" alt="Obaju logo" className="visible-xs" /><span className="sr-only">Obaju - go to homepage</span>
                </a>
                <div className="navbar-buttons">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <i className="fa fa-align-justify"></i>
                    </button>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#search">
                        <span className="sr-only">Toggle search</span>
                        <i className="fa fa-search"></i>
                    </button>
                    <a className="btn btn-default navbar-toggle" href="basket.html">
                        <i className="fa fa-shopping-cart"></i>  <span className="hidden-xs">3 items in cart</span>
                    </a>
                </div>
            </div>
            <div className="navbar-collapse collapse" id="navigation">
                <ul className="nav navbar-nav navbar-left">
                    <li className="active"><a href="index.html">Home</a>
                    </li>
                    <li className="dropdown yamm-fw">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Men <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="yamm-content">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h5>Clothing</h5>
                                            <ul>
                                                <li><a href="category.html">T-shirts</a>
                                                </li>
                                                <li><a href="category.html">Shirts</a>
                                                </li>
                                                <li><a href="category.html">Pants</a>
                                                </li>
                                                <li><a href="category.html">Accessories</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Shoes</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                                <li><a href="category.html">Casual</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Accessories</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                                <li><a href="category.html">Casual</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                                <li><a href="category.html">Casual</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Featured</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                            </ul>
                                            <h5>Looks and trends</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown yamm-fw">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Ladies <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="yamm-content">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h5>Clothing</h5>
                                            <ul>
                                                <li><a href="category.html">T-shirts</a>
                                                </li>
                                                <li><a href="category.html">Shirts</a>
                                                </li>
                                                <li><a href="category.html">Pants</a>
                                                </li>
                                                <li><a href="category.html">Accessories</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Shoes</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                                <li><a href="category.html">Casual</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Accessories</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                                <li><a href="category.html">Casual</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                                <li><a href="category.html">Casual</a>
                                                </li>
                                            </ul>
                                            <h5>Looks and trends</h5>
                                            <ul>
                                                <li><a href="category.html">Trainers</a>
                                                </li>
                                                <li><a href="category.html">Sandals</a>
                                                </li>
                                                <li><a href="category.html">Hiking shoes</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="banner">
                                                <a href="#">
                                                    <img src="img/banner.jpg" className="img img-responsive" alt="" />
                                                </a>
                                            </div>
                                            <div className="banner">
                                                <a href="#">
                                                    <img src="img/banner2.jpg" className="img img-responsive" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown yamm-fw">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Template <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="yamm-content">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h5>Shop</h5>
                                            <ul>
                                                <li><a href="index.html">Homepage</a>
                                                </li>
                                                <li><a href="category.html">Category - sidebar left</a>
                                                </li>
                                                <li><a href="category-right.html">Category - sidebar right</a>
                                                </li>
                                                <li><a href="category-full.html">Category - full width</a>
                                                </li>
                                                <li><a href="detail.html">Product detail</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>User</h5>
                                            <ul>
                                                <li><a href="register.html">Register / login</a>
                                                </li>
                                                <li><a href="customer-orders.html">Orders history</a>
                                                </li>
                                                <li><a href="customer-order.html">Order history detail</a>
                                                </li>
                                                <li><a href="customer-wishlist.html">Wishlist</a>
                                                </li>
                                                <li><a href="customer-account.html">Customer account / change password</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Order process</h5>
                                            <ul>
                                                <li><a href="basket.html">Shopping cart</a>
                                                </li>
                                                <li><a href="checkout1.html">Checkout - step 1</a>
                                                </li>
                                                <li><a href="checkout2.html">Checkout - step 2</a>
                                                </li>
                                                <li><a href="checkout3.html">Checkout - step 3</a>
                                                </li>
                                                <li><a href="checkout4.html">Checkout - step 4</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <h5>Pages and blog</h5>
                                            <ul>
                                                <li><a href="blog.html">Blog listing</a>
                                                </li>
                                                <li><a href="post.html">Blog Post</a>
                                                </li>
                                                <li><a href="faq.html">FAQ</a>
                                                </li>
                                                <li><a href="text.html">Text page</a>
                                                </li>
                                                <li><a href="text-right.html">Text page - right sidebar</a>
                                                </li>
                                                <li><a href="404.html">404 page</a>
                                                </li>
                                                <li><a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            <div className="navbar-buttons">

                <div className="navbar-collapse collapse right" id="basket-overview">
                    <a href="basket.html" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart"></i><span className="hidden-sm">3 items in cart</span></a>
                </div>

                <div className="navbar-collapse collapse right" id="search-not-mobile">
                    <button type="button" className="btn navbar-btn btn-primary" data-toggle="collapse" data-target="#search">
                        <span className="sr-only">Toggle search</span>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

            </div>

            <div className="collapse clearfix" id="search">

                <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-btn">

			<button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>

		    </span>
                    </div>
                </form>

            </div>

        </div>
    </div>
      );
  }
  