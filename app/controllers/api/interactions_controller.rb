class Api::InteractionsController < ApplicationController
  before_action :verify_token, only: [:create]
  def index
  end

  def show
    contact = Contact.find(params[:id])
    interactions = contact.interactions
    render status: :ok, json: interactions
  end

  def create
    interaction = Interaction.new(interaction_params)
    interaction.save!
    render status: :ok, json: {notice: 'interaction was successfully created'}
  rescue Exception => e
    render status: 500, json: {notice: 'interaction failed to create', message: e.message}
  end

  private

  def interaction_params
    params.require(:interaction).permit(:interaction_type, :description, :recording, :contact_id)
  end
end
