require 'rails_helper'

RSpec.describe "Customers", type: :request do
  let!(:customer) { Customer.create!(name: "CompanyA", website: "https://comapnya.com") }
  let(:user) { User.create(username: "mike", email: "mike@example.com", password: "password") }

  describe "GET /index" do
    before do
      get '/api/customers'
    end

    it 'return all customers' do
      res = JSON.parse(response.body)
      expect(res.size).to eq(1)
    end
    
    it 'returns status code 200' do
      expect(response.status).to eq(200)
    end
  end

  describe "GET /create" do
    let(:params) do
      {
        customer: {
          name: "Apple",
          website: "https://apple.com",
          country: "US"
        }
      }
    end
    subject { post '/api/customers', params: params }

    it 'returns status code 401 if not loggedin' do
      subject
      expect(response.status).to eq(401)
    end

    context "when user is loggedin" do
      let(:headers) do
        {
          "X-Auth-Email": user.email,
          "X-Auth-Token": user.authentication_token,
        }
      end
      subject { post '/api/customers', params: params, headers: headers }

      it 'creates new record in db' do
        expect { subject }.to change(Customer, :count).by(1)
      end

      it "return the status with message" do
        subject
        expect(response.status).to eq(200)
        expect(JSON.parse(response.body)["notice"]).to eq("customer was successfully created")
      end

      context "invalid params are passed" do
        let(:params) do
          {
            customer: {
              name: "",
              website: "https://apple.com",
              country: "US"
            }
          }
        end

        context "when name is invalid" do
          it "return the status with error message" do
            subject
            expect(response.status).to eq(500)
            expect(JSON.parse(response.body)["notice"]).to eq("customer failed to create")
            expect(JSON.parse(response.body)["error"]).to eq("Validation failed: Name can't be blank")
          end
        end

        context "when website is invalid" do
          let(:params) do
            {
              customer: {
                name: "CompanyB",
                website: "pplecom",
                country: "US"
              }
            }
          end
          it "return the status with error message" do
            subject
            expect(response.status).to eq(500)
            expect(JSON.parse(response.body)["notice"]).to eq("customer failed to create")
            expect(JSON.parse(response.body)["error"]).to eq("Validation failed: Website You provided invalid URL")
          end
        end

        context "when company is already present" do
          let(:params) do
            {
              customer: {
                name: "CompanyA",
                website: "https://apple.com",
                country: "US"
              }
            }
          end
          it "return the status with error message" do
            subject
            expect(response.status).to eq(500)
            expect(JSON.parse(response.body)["notice"]).to eq("customer failed to create")
            expect(JSON.parse(response.body)["error"]).to eq("Validation failed: Name has already been taken")
          end
        end
      end
    end

    

      

    
  end
end
