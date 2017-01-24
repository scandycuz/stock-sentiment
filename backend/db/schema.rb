# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170124083800) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "url",        null: false
    t.integer  "sentiment"
    t.integer  "anger"
    t.integer  "disgust"
    t.integer  "fear"
    t.integer  "joy"
    t.integer  "sadness"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "company_id"
  end

  add_index "articles", ["company_id"], name: "index_articles_on_company_id", using: :btree
  add_index "articles", ["title"], name: "index_articles_on_title", unique: true, using: :btree

  create_table "companies", force: :cascade do |t|
    t.string   "title",                  null: false
    t.integer  "sentiment",  default: 0, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "slug"
    t.string   "symbol"
    t.integer  "anger",      default: 0
    t.integer  "disgust",    default: 0
    t.integer  "fear",       default: 0
    t.integer  "joy",        default: 0
    t.integer  "sadness",    default: 0
  end

  add_index "companies", ["slug"], name: "index_companies_on_slug", unique: true, using: :btree
  add_index "companies", ["symbol"], name: "index_companies_on_symbol", unique: true, using: :btree
  add_index "companies", ["title"], name: "index_companies_on_title", using: :btree

  create_table "datapoints", force: :cascade do |t|
    t.integer  "company_id", null: false
    t.integer  "article_id", null: false
    t.integer  "sentiment"
    t.integer  "anger"
    t.integer  "disgust"
    t.integer  "fear"
    t.integer  "joy"
    t.integer  "sadness"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "datapoints", ["article_id"], name: "index_datapoints_on_article_id", using: :btree
  add_index "datapoints", ["company_id"], name: "index_datapoints_on_company_id", using: :btree

end
