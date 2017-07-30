class AddColumnToBlogs < ActiveRecord::Migration[5.0]
  def change
    add_column :blogs, :image_file_name, :string
    add_column :blogs, :image_content_type, :string
    add_column :blogs, :image_file_size, :integer
  end
end
