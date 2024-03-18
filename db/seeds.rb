# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

c1 = Customer.find_or_create_by!(name: "Amazon", website: "amazon.com", country: "US")
c2 = Customer.find_or_create_by!(name: "Facebook", website: "facebook.com", country: "US")
c3 = Customer.find_or_create_by!(name: "Tata Sons", website: "tatasons.com", country: "India")
Contact.find_or_create_by!(email: 'hr@amazon.com', phone: "112312312", position: "HR", customer: c1)
Contact.find_or_create_by!(email: 'pm@amazon.com', phone: "122112312", position: "Product manager", customer: c1)
Contact.find_or_create_by!(email: 'cto@amazon.com', phone: "112312312", position: "Chief Technocal Officer", customer: c1)
Contact.find_or_create_by!(email: 'ceo@amazon.com', phone: "112312312", position: "CEO", customer: c1)
Contact.find_or_create_by!(email: 'hr@facebook.com', phone: "112312312", position: "HR", customer: c2)
Contact.find_or_create_by!(email: 'pm@facebook.com', phone: "112312312", position: "Product manager", customer: c2)
Contact.find_or_create_by!(email: 'hr@tata.com', phone: "112312312", position: "HR", customer: c3)
