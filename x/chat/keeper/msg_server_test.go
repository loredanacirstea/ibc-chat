package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/loredanacirstea/chat/testutil/keeper"
	"github.com/loredanacirstea/chat/x/chat/keeper"
	"github.com/loredanacirstea/chat/x/chat/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ChatKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
