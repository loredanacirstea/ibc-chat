package chat

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/loredanacirstea/chat/testutil/sample"
	chatsimulation "github.com/loredanacirstea/chat/x/chat/simulation"
	"github.com/loredanacirstea/chat/x/chat/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = chatsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateMessage = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMessage int = 100

	opWeightMsgUpdateMessage = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMessage int = 100

	opWeightMsgDeleteMessage = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMessage int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	chatGenesis := types.GenesisState{
		MessageList: []types.Message{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		MessageCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&chatGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateMessage int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMessage, &weightMsgCreateMessage, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMessage = defaultWeightMsgCreateMessage
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMessage,
		chatsimulation.SimulateMsgCreateMessage(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMessage int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMessage, &weightMsgUpdateMessage, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMessage = defaultWeightMsgUpdateMessage
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMessage,
		chatsimulation.SimulateMsgUpdateMessage(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMessage int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMessage, &weightMsgDeleteMessage, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMessage = defaultWeightMsgDeleteMessage
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMessage,
		chatsimulation.SimulateMsgDeleteMessage(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
