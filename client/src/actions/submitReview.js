
export const submitReview = (pageState, reviewsForm, user, title) => {
    const allReviews = pageState.state.allDbReviews
    const reviewTitle = reviewsForm.state.reviewTitle
    const reviewBody = reviewsForm.state.reviewContent;
    const starRating = reviewsForm.state.starRating;
    
    if (reviewBody == "" || reviewTitle == "" || starRating == null) {
      alert("Please enter all fields");
      return;
    }
    const userCopy = Object.assign({}, user); // copy since we need the user if they log out.
    
    allReviews.unshift({
        user: userCopy,
        avatar: null, // Default avatar, add if condition once profile page is finished
        reviewTitle: reviewTitle,
        neighbourhoodTitle: title,
        date: getStringDate(),
        reviewBody: reviewBody,
        starRating: starRating
    })

    // console.log(allReviews[0].avatar)
    pageState.setState({
        allDbReviews: allReviews
    })
    
    // Can add conditions to check if form is valid later
    // Clear inputs if needed...
    // reviewsForm.setState({
    //     reviewTitle: ""
    // })
  };


  function getStringDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    return today;
  }