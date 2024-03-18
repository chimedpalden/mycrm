require 'rails_helper'

RSpec.describe Contact, type: :model do
  let!(:customer) { Customer.create!(name: "CompanyA", website: "https://comapnya.com") }

  subject {
    described_class.new(email: "mike@example.com",
                        phone: "21233123232",
                        position: "HR",
                        address: "New Delhi",
                        customer_id: customer.id)
  }

  it "is valid with all valid value" do
    expect(subject).to be_valid
  end

  it "is not valid without a email" do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a position" do
    subject.position = nil
    expect(subject).to_not be_valid
  end

  it "is valid without a phone" do
    subject.phone = nil
    expect(subject).to be_valid
  end

  describe "when phone is present" do
    it "is invalid if length is shorter the 5" do
      subject.phone = "1234"
      expect(subject).not_to be_valid
    end
  
    it "is invalid if length is greater than 15" do
      subject.phone = "1234123123123123"
      expect(subject).not_to be_valid
    end

    it "is invalid if length is b/w 5 and 15" do
      subject.phone = "1234123123"
      expect(subject).to be_valid
    end
  end

  it "is valid without a address" do
    subject.address = nil
    expect(subject).to be_valid
  end

  describe "Associations" do
    it { should belong_to(:customer) }
    it { should have_many(:interactions) }
  end

end
