import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// interface symbols{
//   success: boolean,
//   symbols: {}
// } ;
export interface rateState {
  symbols: any,
  nationalCurrency: {}|null,
  visibility:boolean
}

const initialState: rateState = {
  symbols: {},
  nationalCurrency: {},
  visibility:true 

}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    symbolsAction: (state,action: PayloadAction<Object>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.symbols={...action.payload}
    },
    nationalCurrencyAction: (state,action: PayloadAction<Object>) => {
      state.nationalCurrency =action.payload
    },
    modalHandlerAction: (state) => {
      state.visibility=false
    }
  },
})

// Action creators are generated for each case reducer function
export const { symbolsAction, nationalCurrencyAction,modalHandlerAction } = currencySlice.actions

export default currencySlice.reducer