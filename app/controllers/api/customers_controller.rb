class Api::CustomersController < ApplicationController
  before_action :verify_token, only: [:create, :update, :destroy]
  def index
    customers = Customer.all
    render status: :ok, json: customers, include: [:contacts]
  end

  def create
    customer = Customer.new(customer_params)
    customer.save!
    render status: :ok, json: {notice: 'customer was successfully created'}
  rescue Exception => e
    render status: 500, json: {notice: 'customer failed to create', error: e.message}
  end

  def update
    customer = Customer.find(params[:id])
    customer.update(customer_params)
    render status: :ok, json: {notice: 'customer was successfully updated'}
  rescue Exception => e
    render status: 500, json: {notice: 'customer failed to update', message: e.message}
  end

  def destroy
    customer = Customer.find(params[:id])
    customer.destroy
    render status: :ok, json: {notice: 'customer was successfully deleted'}
  rescue Exception => e
    render status: 500, json: {notice: 'customer failed to delete', message: e.message}
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :website, :country)
  end
end
