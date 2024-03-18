class Api::ContactsController < ApplicationController
  before_action :verify_token, only: [:create, :destroy]
  def create
    contact = Contact.new(contact_params)
    contact.save!
    render status: :ok, json: {notice: 'contacts was successfully created'}
  rescue Exception => e
    render status: 500, json: {notice: 'contace failed to create', message: e.message}
  end

  def destroy
    customer = Contact.find(params[:id])
    customer.destroy
  rescue Exception => e
    render status: 500, json: {notice: 'contact failed to delete', message: e.message}
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :phone, :position, :address, :customer_id)
  end
end
