import React, { Component } from 'react'
import * as styles from '../style'
import Box from './box'
import Donation from './donation'
import * as selectors from '../selectors'
import * as actions from '../actions'
import { connect } from 'react-redux'

const borderHeight = 4

export class Queue extends Component {
  constructor(props){
    super(props)
  }


  render(){
    const totalAmount = this.props.donations.reduce((prev, curr) => prev + curr.amount, 0)
    const padding = 15
    const queueHeight = 400
    
    //Hack to compensate for border height
    const containerHeight = queueHeight + this.props.donations.length * borderHeight

    return(
      <Box title={'€230 403'} titleColor={'lightgray'} backgroundColor={'rgba(210,210,210,.6)'} height={containerHeight}>
        <div style={{padding: `${padding}px`}}>
          { this.props.donations.map((d, i) => queueGenerator(d, i, totalAmount, queueHeight-padding*2)) }
        </div>
      </Box>
    )
  }
}

const onDonationClick = () => {

}

const queueGenerator = (donation, i, totalAmount, queueHeight) => {
  let backgroundColor, height, borderBottom

  if (i === 2) {
    //Highligthed donation (yours)
    backgroundColor = styles.colors.highlight
    borderBottom = `${borderHeight}px solid rgb(254, 255, 76)`
  } else {
    backgroundColor = 'rgb(160, 167, 201)'
    borderBottom = `${borderHeight}px solid rgb(204, 226, 255)`
  }
	
  height = donation.amount / totalAmount
  height = height * queueHeight


  const donationStyle = {
    backgroundColor,
    height,
    borderBottom
  }
  return <Donation onClick={onDonationClick} donationStyle={donationStyle} key={i}/>
}

const mapStateToProps = state => {
  return {
    donations: selectors.getQueue(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveDonation: (id) => {
      dispatch(actions.setActiveDonation(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue)
