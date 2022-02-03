package keeper

import (
	"github.com/loredanacirstea/chat/x/chat/types"
)

var _ types.QueryServer = Keeper{}
