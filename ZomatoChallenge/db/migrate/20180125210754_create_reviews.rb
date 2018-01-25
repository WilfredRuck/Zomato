class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :review_text
      t.string :review_time_friendly
      t.string :rating_text
      t.integer :likes
      t.string :username
      t.string :foodie_level
      t.string :foodie_level_num
      t.text :profile_image

      t.timestamps
    end
  end
end
