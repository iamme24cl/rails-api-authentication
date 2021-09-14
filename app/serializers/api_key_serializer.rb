class ApiKeySerializer < ActiveModel::Serializer
  attributes :id, :bearer_id, :bearer_type, :token
end
