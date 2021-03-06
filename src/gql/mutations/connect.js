import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ABOUT_BRIDGE } from '../queries/about'
import { BRIDGE_NETWORK } from '../queries/network'
import { BRIDGE_NETWORK_STATUS } from '../queries/networkStatus'

export const CONNECT_BRIDGE_WIFI = gql`
  mutation ConnectBridgeWifi($ssid: String, $password: String, $pin: String) {
    connect(ssid: $ssid, password: $password, pin: $pin)
  }
`

export default ({ children, update }) => (
  <Mutation 
    update={update} 
    mutation={CONNECT_BRIDGE_WIFI} 
    refetchQueries={[
      { query: ABOUT_BRIDGE },
      { query: BRIDGE_NETWORK },
      { query: BRIDGE_NETWORK_STATUS },
    ]}
  >
    { children }
  </Mutation>
)