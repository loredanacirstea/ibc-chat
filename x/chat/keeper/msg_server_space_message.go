package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	"github.com/loredanacirstea/chat/x/chat/types"
)

func (k msgServer) SendSpaceMessage(goCtx context.Context, msg *types.MsgSendSpaceMessage) (*types.MsgSendSpaceMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.AppendMessage(ctx, types.Message{
		Creator: msg.User,
		Body:    msg.Body,
	})

	// Construct the packet
	var packet types.SpaceMessagePacketData

	packet.Body = msg.Body
	packet.User = msg.User

	// Transmit the packet
	err := k.TransmitSpaceMessagePacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendSpaceMessageResponse{}, nil
}
