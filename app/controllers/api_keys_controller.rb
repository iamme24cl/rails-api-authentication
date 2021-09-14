class ApiKeysController < ApplicationController
	include ApiKeyAuthenticatable

	# Require API key authentication                                             
  	prepend_before_action :authenticate_with_api_key!, only: %i[index destroy]

	def index
		user = User.find_by(id: current_bearer.id)
		if user
			render json: user.api_keys
		else
			render json: {logged_in: false, user: {}}
		end
	end

	def create
		user = User.find_by email: params[:email]
		if user&.authenticate(params[:password])
			api_key = user.api_keys.build(token: SecureRandom.hex)
			if api_key.save
				render json: api_key, status: :created 
			else
				render status: :unauthorized
			end
		end
	end

	def destroy
		api_key = current_bearer.api_keys.find(params[:id]) 

		api_key.destroy
		render json: current_bearer.api_keys
	end
end
