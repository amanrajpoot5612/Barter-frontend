import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;  

const CardComponent = ({card}) => {
  
  return (
    <Card
    variant={'borderless'}
    hoverable
    loading={false}
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={card?.img || "card-image"}
      />
    }
  >
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
  </Card>
  )
}

export default CardComponent;