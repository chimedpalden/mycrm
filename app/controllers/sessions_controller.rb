class SessionsController < ApplicationController
  # before_action :verify_token, only: [:create]

  def create
    # p request.headers
    # binding.break
    @user = User.find_by!(email: login_params[:email].downcase)
    unless @user.authenticate(login_params[:password])
      # render status: :ok, json: { users: users }
      respond_with_error("Incorrect credentials, try again.", :unauthorized)
    end
  end

  def destroy
    @current_user = nil
  end

  private

    def login_params
      params.require(:login).permit(:email, :password)
    end
end