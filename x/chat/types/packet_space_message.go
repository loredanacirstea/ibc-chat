package types

// ValidateBasic is used for validating the packet
func (p SpaceMessagePacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p SpaceMessagePacketData) GetBytes() ([]byte, error) {
	var modulePacket ChatPacketData

	modulePacket.Packet = &ChatPacketData_SpaceMessagePacket{&p}

	return modulePacket.Marshal()
}
