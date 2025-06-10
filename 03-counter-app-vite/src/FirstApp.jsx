
import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {

  // console.log(props);


  return (
    <>
    <h1>{ title }</h1>

    <p>{ subTitle }</p>
    </>
  )
}

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired
}