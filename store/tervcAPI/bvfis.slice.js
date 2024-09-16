import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bvfi_list = createAsyncThunk(
  "bvfis/api_v1_bvfi_list",
  async payload => {
    const response = await apiService.api_v1_bvfi_list(payload)
    return response.data
  }
)
export const api_v1_bvfi_create = createAsyncThunk(
  "bvfis/api_v1_bvfi_create",
  async payload => {
    const response = await apiService.api_v1_bvfi_create(payload)
    return response.data
  }
)
export const api_v1_bvfi_retrieve = createAsyncThunk(
  "bvfis/api_v1_bvfi_retrieve",
  async payload => {
    const response = await apiService.api_v1_bvfi_retrieve(payload)
    return response.data
  }
)
export const api_v1_bvfi_update = createAsyncThunk(
  "bvfis/api_v1_bvfi_update",
  async payload => {
    const response = await apiService.api_v1_bvfi_update(payload)
    return response.data
  }
)
export const api_v1_bvfi_partial_update = createAsyncThunk(
  "bvfis/api_v1_bvfi_partial_update",
  async payload => {
    const response = await apiService.api_v1_bvfi_partial_update(payload)
    return response.data
  }
)
export const api_v1_bvfi_destroy = createAsyncThunk(
  "bvfis/api_v1_bvfi_destroy",
  async payload => {
    const response = await apiService.api_v1_bvfi_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bvfisSlice = createSlice({
  name: "bvfis",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bvfi_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvfi_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvfi_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvfi_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvfi_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvfi_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvfi_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvfi_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bvfi_list,
  api_v1_bvfi_create,
  api_v1_bvfi_retrieve,
  api_v1_bvfi_update,
  api_v1_bvfi_partial_update,
  api_v1_bvfi_destroy,
  slice: bvfisSlice
}
