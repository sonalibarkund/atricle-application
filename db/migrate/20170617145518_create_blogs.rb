class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :shortdesc
      t.text :longdesc
      t.boolean :status
      t.datetime :date
      t.string :slug

      t.timestamps
    end
    say "table created"
  end
end
